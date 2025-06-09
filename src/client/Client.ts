// deno-lint-ignore-file require-await no-explicit-any
import { type Connection, connectToParent, type Methods } from "penpal";
import type {
  AppElement,
  Context,
  GetStateResponse,
  ListenerCallbackMap,
  ListenerCallbackName,
  PollOAuth2FlowResult,
  ProxyAuthPayload,
  SetStateResponse,
  StartOAuth2GlobalFlowResult,
  StartOAuth2LocalFlowResult,
  StateOptions,
  TargetAction,
  TargetActionOptions,
  TargetActionType,
  UIMessage,
} from "@/client/types.ts";
import EntityAssociation from "@/client/EntityAssociation.ts";
import UI from "@/client/UI.ts";
import OAuth from "@/client/OAuth.ts";
import State from "@/client/State.ts";
import Proxy from "@/client/Proxy.ts";
import Setting from "@/client/Settings.ts";

type DeskproCallSender = {
  openContact: (
    contact: Partial<{ id: number; emailAddress: string; phoneNumber: string }>,
  ) => void;
  setBadgeCount: (count: number) => void;
  setTitle: (title: string) => void;
  focus: () => void;
  unfocus: () => void;
  _registerElement: (id: string, element: AppElement) => Promise<void>;
  _deregisterElement: (id: string) => Promise<void>;
  _getProxyAuth: () => Promise<ProxyAuthPayload>;
  _getAdminGenericProxyAuth: () => Promise<ProxyAuthPayload>;
  _entityAssociationGet: () => Promise<any>;
  _entityAssociationSet: () => Promise<boolean>;
  _entityAssociationList: () => Promise<any[]>;
  _entityAssociationDelete: () => Promise<boolean>;
  _entityAssociationCountEntities: () => Promise<number>;
  _stateSet: (
    name: string,
    value: string,
    options?: StateOptions,
  ) => Promise<any>;
  _userStateSet: (
    name: string,
    value: string,
    options?: StateOptions,
  ) => Promise<any>;
  _stateGet: (name: string) => Promise<string>;
  _userStateGet: (name: string) => Promise<any>;
  _stateHas: (name: string) => Promise<boolean>;
  _userStateHas: (name: string) => Promise<boolean>;
  _stateDelete: (name: string) => Promise<any>;
  _userStateDelete: (name: string) => Promise<any>;
  _settingSet: (name: string, value: any) => Promise<any>;
  _settingsSet: (settings: string) => Promise<any>;
  _blockingSet: (blocking: boolean) => Promise<any>;
  _registerTargetAction: (
    name: string,
    type: TargetActionType,
    options?: TargetActionOptions,
  ) => Promise<void>;
  _deregisterTargetAction: (name: string) => Promise<void>;
  _startOAuth2LocalFlow: (
    codeAcquisitionPattern: string,
    timeout: number,
  ) => Promise<StartOAuth2LocalFlowResult>;
  _startOAuth2GlobalFlow: (
    clientId: string,
    timeout: number,
  ) => Promise<StartOAuth2GlobalFlowResult>;
  _pollOAuth2Flow: <PollOAuth2FlowResult>(
    state: string,
  ) => Promise<PollOAuth2FlowResult>;
  _setAdminSetting: (value: string) => void;
  _setAdminSettingInvalid: (message: string, settingName?: string) => void;
  _sendUIMessage: (message: UIMessage) => Promise<void>;
};

function emptyFunction(): void {}
function emptyAsyncFunction(): Promise<void> {
  return Promise.resolve();
}

/**
 * Client class for interacting with the Deskpro platform.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/anatomy-of-an-app
 *
 * @example
 * ```typescript
 * import { createClient } from "@deskpro/app-sdk";
 *
 * const client = createClient()
 *
 * client.run().then(() => {
 *   // Client is ready to use
 *
 *   // Example usage of UI
 *   client.ui().setTitle("My App");
 *   client.ui().setBadgeCount(5);
 *   client.ui().focus();
 *
 *   // Example usage of Proxy
 *   client.proxy("agent").fetch().then((fetch) => {
 *     fetch("https://api.example.com/data").then((response) => {
 *       return response.json();
 *     }).then((data) => {
 *       console.log(data);
 *     });
 *  });
 * });
 * ```
 */
export default class Client<Settings extends object = never> {
  /**
   * @ignore
   */
  private listeners: {
    [Key in ListenerCallbackName<Settings>]: ListenerCallbackMap<
      Settings
    >[Key][];
  } = {
    ready: [],
    show: [],
    change: [],
    targetAction: [],
    elementEvent: [],
    adminSettingsChange: [],
  };

  /**
   * @ignore
   */
  private parentMethods = {
    _onReady: (context: Context<Settings>) => this.emit("ready", context),
    _onShow: (context: Context<Settings>) => this.emit("show", context),
    _onChange: (context: Context<Settings>) => this.emit("change", context),
    _onTargetAction: (action: { action: TargetAction<any, Settings> }) =>
      this.emit("targetAction", action.action),
    _onElementEvent: (id: string, type: string, payload: any) =>
      this.emit("elementEvent", { id, type, payload } as any),
    _onAdminSettingsChange: (settings: Record<string, any>) =>
      this.emit("adminSettingsChange", settings),
  };

  // Proxy
  /**
   * @ignore
   */
  private _getProxyAuth: (() => Promise<ProxyAuthPayload>) | undefined;
  /**
   * @ignore
   */
  private _getAdminGenericProxyAuth:
    | (() => Promise<ProxyAuthPayload>)
    | undefined;

  // UI
  /**
   * @ignore
   */
  private _registerElement: (id: string, element: AppElement) => void;
  /**
   * @ignore
   */
  private _deregisterElement: (id: string) => void;
  /**
   * @ignore
   */
  private _setBadgeCount: (count: number) => void;
  /**
   * @ignore
   */
  private _setTitle: (title: string) => void;
  /**
   * @ignore
   */
  private _focus: () => void;
  /**
   * @ignore
   */
  private _unfocus: () => void;
  /**
   * @ignore
   */
  private _openContact: (
    contact: Partial<{ id: number; emailAddress: string; phoneNumber: string }>,
  ) => void;
  /**
   * @ignore
   */
  private _sendUIMessage: (message: UIMessage) => Promise<void>;
  /**
   * @ignore
   */
  private _setBlocking: (blocking: boolean) => Promise<void>;

  /**
   * @ignore
   */
  private _registerTargetAction: (
    name: string,
    type: TargetActionType,
    options?: TargetActionOptions,
  ) => Promise<void>;
  /**
   * @ignore
   */
  private _deregisterTargetAction: (name: string) => Promise<void>;

  // Entity Association
  /**
   * @ignore
   */
  private _entityAssociationSet: (
    entityId: string,
    name: string,
    key: string,
    value?: string,
  ) => Promise<boolean>;
  /**
   * @ignore
   */
  private _entityAssociationDelete: (
    entityId: string,
    name: string,
    key: string,
  ) => Promise<boolean>;
  /**
   * @ignore
   */
  private _entityAssociationGet: (
    entityId: string,
    name: string,
    key: string,
  ) => Promise<string | null>;
  /**
   * @ignore
   */
  private _entityAssociationList: (
    entityId: string,
    name: string,
  ) => Promise<string[]>;
  /**
   * @ignore
   */
  private _entityAssociationCountEntities: (
    name: string,
    key: string,
  ) => Promise<number>;

  // State
  /**
   * @ignore
   */
  private _setState: <T>(
    name: string,
    value: T,
    options?: StateOptions,
  ) => Promise<SetStateResponse>;
  /**
   * @ignore
   */
  private _setUserState: <T>(
    name: string,
    value: T,
    options?: StateOptions,
  ) => Promise<SetStateResponse>;
  /**
   * @ignore
   */
  private _getState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  /**
   * @ignore
   */
  private _getUserState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  /**
   * @ignore
   */
  private _deleteState: (name: string) => Promise<boolean>;
  /**
   * @ignore
   */
  private _deleteUserState: (name: string) => Promise<boolean>;
  /**
   * @ignore
   */
  private _hasState: (name: string) => Promise<boolean>;
  /**
   * @ignore
   */
  private _hasUserState: (name: string) => Promise<boolean>;

  // OAuth2
  /**
   * @ignore
   */
  private _startOAuth2LocalFlow: (
    codeAcquisitionPattern: RegExp,
    timeout: number,
  ) => Promise<StartOAuth2LocalFlowResult>;

  /**
   * @ignore
   */
  private _startOAuth2GlobalFlow: (
    clientId: string,
    timeout: number,
  ) => Promise<StartOAuth2GlobalFlowResult>;
  /**
   * @ignore
   */
  private _pollOAuth2Flow: <T = PollOAuth2FlowResult>(
    state: string,
  ) => Promise<T>;

  // Settings
  /**
   * @ignore
   */
  private _setSetting: <T>(name: string, value: T) => Promise<void>;
  /**
   * @ignore
   */
  private _setSettings: (settings: Record<string, any>) => Promise<void>;
  /**
   * @ignore
   */
  private _setAdminSetting: (value: string) => void;
  /**
   * @ignore
   */
  private _setAdminSettingInvalid: (
    message: string,
    settingName?: string,
  ) => void;

  constructor(
    private readonly parent: <T extends Methods = Methods>(
      options?: object,
    ) => Connection<T>,
  ) {
    this._getProxyAuth = undefined;
    this._getAdminGenericProxyAuth = undefined;
    this._registerElement = emptyFunction;
    this._deregisterElement = emptyFunction;
    this._setBadgeCount = emptyFunction;
    this._setTitle = emptyFunction;
    this._focus = emptyFunction;
    this._unfocus = emptyFunction;
    this._openContact = emptyFunction;

    this._entityAssociationSet = async () => false;
    this._entityAssociationDelete = async () => false;
    this._entityAssociationGet = async () => null;
    this._entityAssociationList = async () => [];
    this._entityAssociationCountEntities = async () => 0;

    this._setState = async () => ({ isSuccess: false, errors: [] });
    this._setUserState = async () => ({ isSuccess: false, errors: [] });
    this._getState = async () => [];
    this._getUserState = async () => [];
    this._deleteState = async () => false;
    this._deleteUserState = async () => false;
    this._hasState = async () => false;
    this._hasUserState = async () => false;

    this._setBlocking = emptyAsyncFunction;

    this._registerTargetAction = emptyAsyncFunction;
    this._deregisterTargetAction = emptyAsyncFunction;

    this._startOAuth2LocalFlow = async () => ({} as StartOAuth2LocalFlowResult);
    this._startOAuth2GlobalFlow =
      async () => ({} as StartOAuth2GlobalFlowResult);
    this._pollOAuth2Flow = async <
      PollOAuth2FlowResult,
    >() => ({} as PollOAuth2FlowResult);

    this._setSetting = emptyAsyncFunction;
    this._setSettings = emptyAsyncFunction;
    this._setAdminSetting = emptyAsyncFunction;
    this._setAdminSettingInvalid = emptyAsyncFunction;

    this._sendUIMessage = emptyAsyncFunction;
  }

  public async run(): Promise<void> {
    const parent = await this.parent<DeskproCallSender>({
      methods: this.parentMethods,
    }).promise;

    // Core
    if (parent._getProxyAuth) {
      this._getProxyAuth = parent._getProxyAuth;
    }

    if (parent._getAdminGenericProxyAuth) {
      this._getAdminGenericProxyAuth = parent._getAdminGenericProxyAuth;
    }

    if (parent._registerElement) {
      this._registerElement = (id: string, element: AppElement) =>
        parent._registerElement(id, element);
    }

    if (parent._deregisterElement) {
      this._deregisterElement = (id: string) => parent._deregisterElement(id);
    }

    // Common
    if (parent.setBadgeCount) {
      this._setBadgeCount = parent.setBadgeCount;
    }

    if (parent.setTitle) {
      this._setTitle = parent.setTitle;
    }

    if (parent.focus) {
      this._focus = parent.focus;
    }

    if (parent.unfocus) {
      this._unfocus = parent.unfocus;
    }

    if (parent.openContact) {
      this._openContact = parent.openContact;
    }

    // Entity Association
    if (parent._entityAssociationGet) {
      this._entityAssociationGet = parent._entityAssociationGet;
    }

    if (parent._entityAssociationSet) {
      this._entityAssociationSet = parent._entityAssociationSet;
    }

    if (parent._entityAssociationList) {
      this._entityAssociationList = parent._entityAssociationList;
    }

    if (parent._entityAssociationDelete) {
      this._entityAssociationDelete = parent._entityAssociationDelete;
    }

    if (parent._entityAssociationCountEntities) {
      this._entityAssociationCountEntities =
        parent._entityAssociationCountEntities;
    }

    // State
    if (parent._stateSet) {
      this._setState = <T>(name: string, value: T, options?: StateOptions) =>
        parent._stateSet(name, JSON.stringify(value), options);
    }

    if (parent._userStateSet) {
      this._setUserState = <T>(
        name: string,
        value: T,
        options?: StateOptions,
      ) => parent._userStateSet(name, JSON.stringify(value), options);
    }

    if (parent._stateGet) {
      this._getState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._stateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._userStateGet) {
      this._getUserState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._userStateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._stateDelete) {
      this._deleteState = parent._stateDelete;
    }

    if (parent._userStateDelete) {
      this._deleteUserState = parent._userStateDelete;
    }

    if (parent._stateHas) {
      this._hasState = parent._stateHas;
    }

    if (parent._userStateHas) {
      this._hasUserState = parent._userStateHas;
    }

    // Settings
    if (parent._settingSet) {
      this._setSetting = <T>(name: string, value: T) =>
        parent._settingSet(name, value);
    }

    if (parent._settingsSet) {
      this._setSettings = (settings: Record<string, any>) =>
        parent._settingsSet(JSON.stringify(settings));
    }

    // Blocking
    if (parent._blockingSet) {
      this._setBlocking = (blocking: boolean) => parent._blockingSet(blocking);
    }

    // Target Actions
    if (parent._registerTargetAction) {
      this._registerTargetAction = (
        name: string,
        type: TargetActionType,
        options?: TargetActionOptions,
      ) => parent._registerTargetAction(name, type, options);
    }

    if (parent._deregisterTargetAction) {
      this._deregisterTargetAction = (name: string) =>
        parent._deregisterTargetAction(name);
    }

    // OAuth2
    if (parent._startOAuth2LocalFlow) {
      this._startOAuth2LocalFlow = (
        codeAcquisitionPattern: RegExp,
        timeout: number,
      ) => parent._startOAuth2LocalFlow(codeAcquisitionPattern.source, timeout);
    }
    if (parent._startOAuth2GlobalFlow) {
      this._startOAuth2GlobalFlow = (clientId: string, timeout: number) =>
        parent._startOAuth2GlobalFlow(clientId, timeout);
    }
    if (parent._pollOAuth2Flow) {
      this._pollOAuth2Flow = <PollOAuth2FlowResult>(state: string) =>
        parent._pollOAuth2Flow<PollOAuth2FlowResult>(state);
    }

    // Admin
    if (parent._setAdminSetting) {
      this._setAdminSetting = (value) => parent._setAdminSetting(value);
    }

    if (parent._setAdminSettingInvalid) {
      this._setAdminSettingInvalid = (message, settingName) =>
        parent._setAdminSettingInvalid(message, settingName);
    }

    // Deskpro UI
    if (parent._sendUIMessage) {
      this._sendUIMessage = (message: UIMessage) =>
        parent._sendUIMessage(message);
    }
  }

  /**
   * @ignore
   */
  private emit<Key extends ListenerCallbackName<Settings>>(
    event: Key,
    arg: Parameters<ListenerCallbackMap<Settings>[Key]>[0],
  ): void {
    for (const cb of this.listeners[event]) {
      cb(arg as any); // Couldn't get types to work so using `as any` for now.
    }
  }

  public subscribe<Key extends ListenerCallbackName<Settings>>(
    event: Key,
    callback: ListenerCallbackMap<Settings>[Key],
  ): void {
    this.listeners[event].push(callback);
  }

  public unsubscribe<Key extends ListenerCallbackName<Settings>>(
    event: Key,
    callback: ListenerCallbackMap<Settings>[Key],
  ): void {
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback,
    ) as any; // Couldn't get `is` to work with filter so using `as any` for now.
  }

  public getEntityAssociation(
    name: string,
    entityId: string,
  ): EntityAssociation {
    return new EntityAssociation(
      {
        get: this._entityAssociationGet,
        set: this._entityAssociationSet,
        delete: this._entityAssociationDelete,
        count: this._entityAssociationCountEntities,
        list: this._entityAssociationList,
      },
      name,
      entityId,
    );
  }

  public oauth(): OAuth {
    return new OAuth({
      startOAuth2LocalFlow: this._startOAuth2LocalFlow,
      startOAuth2GlobalFlow: this._startOAuth2GlobalFlow,
      pollOAuth2Flow: this._pollOAuth2Flow,
    });
  }

  public ui(): UI {
    return new UI({
      setBadgeCount: this._setBadgeCount,
      setTitle: this._setTitle,
      focus: this._focus,
      unfocus: this._unfocus,
      setBlocking: this._setBlocking,
      openContact: this._openContact,
      sendUIMessage: this._sendUIMessage,
      registerTargetAction: this._registerTargetAction,
      deregisterTargetAction: this._deregisterTargetAction,
      registerElement: this._registerElement,
      deregisterElement: this._deregisterElement,
    });
  }

  public state(): State {
    return new State({
      setState: this._setState,
      getState: this._getState,
      deleteState: this._deleteState,
      hasState: this._hasState,
    });
  }

  public settings(): Setting {
    return new Setting({
      setSetting: this._setSetting,
      setSettings: this._setSettings,
      setAdminSetting: this._setAdminSetting,
      setAdminSettingInvalid: this._setAdminSettingInvalid,
    });
  }

  public userState(): State {
    return new State({
      setState: this._setUserState,
      getState: this._getUserState,
      deleteState: this._deleteUserState,
      hasState: this._hasUserState,
    });
  }

  public proxy(role: "agent" | "admin" = "agent"): Proxy {
    const clientMethod = role === "agent"
      ? "_getProxyAuth"
      : "_getAdminGenericProxyAuth";
    if (typeof this[clientMethod] !== "function") {
      throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
    }

    return new Proxy(this[clientMethod]);
  }
}

/**
 * Creates a new Deskpro client instance.
 */
export function createClient<
  Settings extends object = Record<string, never>,
>(): Client<Settings> {
  return new Client<Settings>(connectToParent);
}
