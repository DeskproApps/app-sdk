// deno-lint-ignore-file require-await no-explicit-any
/* eslint-disable @typescript-eslint/no-empty-function */
import { type Connection, connectToParent, type Methods } from "penpal";
import {
  type AppElement,
  type ChildMethod,
  type ChildMethods,
  type ClientOptions,
  type Context,
  type DeskproCallSender,
  type ElementEventChildMethod,
  type GetStateResponse,
  type IOAuth2,
  OAuth2Error,
  type OAuth2Result,
  type PollOAuth2FlowResult,
  type PollOAuth2GlobalFlowResult,
  type PollOAuth2LocalFlowResult,
  type ProxyAuthPayload,
  type SetStateResponse,
  type StartOAuth2GlobalFlowResult,
  type StartOAuth2LocalFlowResult,
  type StateOptions,
  type TargetAction,
  type TargetActionChildMethod,
  type TargetActionOptions,
  type TargetActionType,
  type UIMessage,
  type UserStateOptions,
} from "@/client/types.ts";
import EntityAssociation from "@/client/EntityAssociation.ts";
import UI from "@/client/UI.ts";

export default class Client {
  private parentMethods: ChildMethods = {
    onReady: () => undefined,
    onShow: () => undefined,
    onChange: () => undefined,
    onTargetAction: () => undefined,
    onElementEvent: () => undefined,
    onAdminSettingsChange: () => undefined,
  };

  // Core Methods
  public getProxyAuth: () => Promise<ProxyAuthPayload>;
  public getAdminGenericProxyAuth: () => Promise<ProxyAuthPayload>;
  public registerElement: (id: string, element: AppElement) => void;
  public deregisterElement: (id: string) => void;

  // Sidebar Methods
  public setBadgeCount: (count: number) => void;
  public setTitle: (title: string) => void;
  public focus: () => void;
  public unfocus: () => void;
  public openContact: (
    contact: Partial<{ id: number; emailAddress: string; phoneNumber: string }>,
  ) => void;

  // EntityAssociation
  public entityAssociationSet: (
    entityId: string,
    name: string,
    key: string,
    value?: string,
  ) => Promise<void>;
  public entityAssociationDelete: (
    entityId: string,
    name: string,
    key: string,
  ) => Promise<void>;
  public entityAssociationGet: (
    entityId: string,
    name: string,
    key: string,
  ) => Promise<string | null>;
  public entityAssociationList: (
    entityId: string,
    name: string,
  ) => Promise<string[]>;
  public entityAssociationCountEntities: (
    name: string,
    key: string,
  ) => Promise<number>;

  // State
  public setState: <T>(
    name: string,
    value: T,
    options?: StateOptions,
  ) => Promise<SetStateResponse>;
  public setUserState: <T>(
    name: string,
    value: T,
    options?: UserStateOptions,
  ) => Promise<SetStateResponse>;
  public getState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  public getUserState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  public deleteState: (name: string) => Promise<boolean>;
  public deleteUserState: (name: string) => Promise<boolean>;
  public hasState: (name: string) => Promise<boolean>;
  public hasUserState: (name: string) => Promise<boolean>;

  // Settings
  public setSetting: <T>(name: string, value: T) => Promise<void>;
  public setSettings: (settings: Record<string, any>) => Promise<void>;

  // Blocking
  public setBlocking: (blocking: boolean) => Promise<void>;

  // Target Actions
  public registerTargetAction: (
    name: string,
    type: TargetActionType,
    options?: TargetActionOptions,
  ) => Promise<void>;
  public deregisterTargetAction: (name: string) => Promise<void>;

  // OAuth2
  public startOAuth2LocalFlow: (
    codeAcquisitionPattern: RegExp,
    timeout: number,
  ) => Promise<StartOAuth2LocalFlowResult>;
  public startOAuth2GlobalFlow: (
    clientId: string,
    timeout: number,
  ) => Promise<StartOAuth2GlobalFlowResult>;
  public pollOAuth2Flow: <T = PollOAuth2FlowResult>(
    state: string,
  ) => Promise<T>;

  // Admin
  public setAdminSetting: (value: string) => void;
  public setAdminSettingInvalid: (
    message: string,
    settingName?: string,
  ) => void;

  // Deskpro UI
  public sendUIMessage: (message: UIMessage) => Promise<void>;

  constructor(
    private readonly parent: <T extends Methods = Methods>(
      options?: object,
    ) => Connection<T>,
    private readonly options: ClientOptions,
  ) {
    this.getProxyAuth = () => new Promise<ProxyAuthPayload>(() => {});
    this.getAdminGenericProxyAuth = () =>
      new Promise<ProxyAuthPayload>(() => {});
    this.registerElement = () => {};
    this.deregisterElement = () => {};
    this.setBadgeCount = () => {};
    this.setTitle = () => {};
    this.focus = () => {};
    this.unfocus = () => {};
    this.openContact = () => {};

    this.entityAssociationSet = async () => {};
    this.entityAssociationDelete = async () => {};
    this.entityAssociationGet = async () => null;
    this.entityAssociationList = async () => [""];
    this.entityAssociationCountEntities = async () => 0;

    this.setState = async () => ({ isSuccess: false, errors: [] });
    this.setUserState = async () => ({ isSuccess: false, errors: [] });
    this.getState = async () => [];
    this.getUserState = async () => [];
    this.deleteState = async () => false;
    this.deleteUserState = async () => false;
    this.hasState = async () => false;
    this.hasUserState = async () => false;

    this.setSetting = async () => {};
    this.setSettings = async () => {};

    this.setBlocking = async () => {};

    this.registerTargetAction = async () => {};
    this.deregisterTargetAction = async () => {};

    this.startOAuth2LocalFlow = async () => ({} as StartOAuth2LocalFlowResult);
    this.startOAuth2GlobalFlow =
      async () => ({} as StartOAuth2GlobalFlowResult);
    this.pollOAuth2Flow = async <
      PollOAuth2FlowResult,
    >() => ({} as PollOAuth2FlowResult);

    this.setAdminSetting = async () => {};
    this.setAdminSettingInvalid = async () => {};

    this.sendUIMessage = async () => {};
  }

  public async run(): Promise<void> {
    const parent = await this.parent<DeskproCallSender>({
      methods: {
        _onReady: this.parentMethods.onReady,
        _onShow: this.parentMethods.onShow,
        _onChange: this.parentMethods.onChange,
        _onTargetAction: this.parentMethods.onTargetAction,
        _onElementEvent: this.parentMethods.onElementEvent,
        _onAdminSettingsChange: this.parentMethods.onAdminSettingsChange,
      },
    }).promise;

    // Core
    if (parent._getProxyAuth) {
      this.getProxyAuth = parent._getProxyAuth;
    }

    if (parent._getAdminGenericProxyAuth) {
      this.getAdminGenericProxyAuth = parent._getAdminGenericProxyAuth;
    }

    if (parent._registerElement) {
      this.registerElement = (id: string, element: AppElement) =>
        parent._registerElement(id, element);
    }

    if (parent._deregisterElement) {
      this.deregisterElement = (id: string) => parent._deregisterElement(id);
    }

    // Common
    if (parent.setBadgeCount) {
      this.setBadgeCount = parent.setBadgeCount;
    }

    if (parent.setTitle) {
      this.setTitle = parent.setTitle;
    }

    if (parent.focus) {
      this.focus = parent.focus;
    }

    if (parent.unfocus) {
      this.unfocus = parent.unfocus;
    }

    if (parent.openContact) {
      this.openContact = parent.openContact;
    }

    // Entity Association
    if (parent._entityAssociationGet) {
      this.entityAssociationGet = parent._entityAssociationGet;
    }

    if (parent._entityAssociationSet) {
      this.entityAssociationSet = parent._entityAssociationSet;
    }

    if (parent._entityAssociationList) {
      this.entityAssociationList = parent._entityAssociationList;
    }

    if (parent._entityAssociationDelete) {
      this.entityAssociationDelete = parent._entityAssociationDelete;
    }

    if (parent._entityAssociationCountEntities) {
      this.entityAssociationCountEntities =
        parent._entityAssociationCountEntities;
    }

    // State
    if (parent._stateSet) {
      this.setState = <T>(name: string, value: T, options?: StateOptions) =>
        parent._stateSet(name, JSON.stringify(value), options);
    }

    if (parent._userStateSet) {
      this.setUserState = <T>(
        name: string,
        value: T,
        options?: UserStateOptions,
      ) => parent._userStateSet(name, JSON.stringify(value), options);
    }

    if (parent._stateGet) {
      this.getState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._stateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._userStateGet) {
      this.getUserState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._userStateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._stateDelete) {
      this.deleteState = parent._stateDelete;
    }

    if (parent._userStateDelete) {
      this.deleteUserState = parent._userStateDelete;
    }

    if (parent._stateHas) {
      this.hasState = parent._stateHas;
    }

    if (parent._userStateHas) {
      this.hasUserState = parent._userStateHas;
    }

    // Settings
    if (parent._settingSet) {
      this.setSetting = <T>(name: string, value: T) =>
        parent._settingSet(name, value);
    }

    if (parent._settingsSet) {
      this.setSettings = (settings: Record<string, any>) =>
        parent._settingsSet(JSON.stringify(settings));
    }

    // Blocking
    if (parent._blockingSet) {
      this.setBlocking = (blocking: boolean) => parent._blockingSet(blocking);
    }

    // Target Actions
    if (parent._registerTargetAction) {
      this.registerTargetAction = (
        name: string,
        type: TargetActionType,
        options?: TargetActionOptions,
      ) => parent._registerTargetAction(name, type, options);
    }

    if (parent._deregisterTargetAction) {
      this.deregisterTargetAction = (name: string) =>
        parent._deregisterTargetAction(name);
    }

    // OAuth2
    if (parent._startOAuth2LocalFlow) {
      this.startOAuth2LocalFlow = (
        codeAcquisitionPattern: RegExp,
        timeout: number,
      ) => parent._startOAuth2LocalFlow(codeAcquisitionPattern.source, timeout);
    }
    if (parent._startOAuth2GlobalFlow) {
      this.startOAuth2GlobalFlow = (clientId: string, timeout: number) =>
        parent._startOAuth2GlobalFlow(clientId, timeout);
    }
    if (parent._pollOAuth2Flow) {
      this.pollOAuth2Flow = <PollOAuth2FlowResult>(state: string) =>
        parent._pollOAuth2Flow<PollOAuth2FlowResult>(state);
    }

    // Admin
    if (parent._setAdminSetting) {
      this.setAdminSetting = (value) => parent._setAdminSetting(value);
    }

    if (parent._setAdminSettingInvalid) {
      this.setAdminSettingInvalid = (message, settingName) =>
        parent._setAdminSettingInvalid(message, settingName);
    }

    // Deskpro UI
    if (parent._sendUIMessage) {
      this.sendUIMessage = (message: UIMessage) =>
        parent._sendUIMessage(message);
    }
  }

  public onReady(cb: ChildMethod): void {
    this.parentMethods.onReady = (context: Context<any>) => {
      cb(context);
    };
  }

  public onShow(cb: ChildMethod): void {
    this.parentMethods.onShow = (context: Context<any>) => {
      cb(context);
    };
  }

  public onChange(cb: ChildMethod): void {
    this.parentMethods.onChange = (context: Context<any>) => {
      cb(context);
    };
  }

  public onTargetAction(cb: TargetActionChildMethod): void {
    this.parentMethods.onTargetAction = <Payload>(
      action: TargetAction<Payload>,
    ) => {
      cb(action);
    };
  }

  public onElementEvent(cb: ElementEventChildMethod): void {
    this.parentMethods.onElementEvent = <Payload>(
      id: string,
      type: string,
      payload: Payload,
    ) => {
      cb(id, type, payload);
    };
  }

  public onAdminSettingsChange(
    cb: (settings: Record<string, any>) => void,
  ): void {
    this.parentMethods.onAdminSettingsChange = (
      settings: Record<string, any>,
    ) => {
      cb(settings);
    };
  }

  public getEntityAssociation(
    name: string,
    entityId: string,
  ): EntityAssociation {
    return new EntityAssociation(this, name, entityId);
  }

  public async startOauth2Local(
    authorizeUrlFn: (
      data: { state: string; callbackUrl: string; codeChallenge: string },
    ) => string,
    codeAcquisitionPattern: RegExp,
    convertResponseToToken: (
      code: string,
      codeVerifierProxyPlaceholder: string,
    ) => Promise<OAuth2Result>,
    options?: { timeout?: number; pollInterval?: number },
  ): Promise<IOAuth2> {
    const timeout = options?.timeout ?? (600 * 1000); // 10 minute timeout
    const pollInterval = options?.pollInterval ?? 2000; // 2 second poll interval

    const start = await this.startOAuth2LocalFlow(
      codeAcquisitionPattern,
      timeout,
    );

    // Build our proper authorize URL using downstream implementation.
    const authorizeUrl = authorizeUrlFn({
      state: start.state,
      callbackUrl: start.callbackUrl,
      codeChallenge: start.codeChallenge,
    });

    // Curried poll function that returns the promise that resolves when polling is done... or rejects
    // when polling times out
    const poll = () =>
      new Promise<OAuth2Result>((resolve, reject) => {
        const poller = setInterval(() => {
          this.pollOAuth2Flow<PollOAuth2LocalFlowResult>(start.state).then(
            (pollResult) => {
              if (pollResult && pollResult.status !== "Pending") {
                clearInterval(poller);
                if (pollResult.error) {
                  reject(new OAuth2Error(pollResult.error));
                  return;
                }
                convertResponseToToken(
                  pollResult.authCode as string,
                  pollResult.codeVerifierProxyPlaceholder,
                )
                  .then(resolve);
              }
            },
          );
        }, pollInterval);

        setTimeout(() => {
          clearInterval(poller);
          reject(new OAuth2Error("Acquisition timeout"));
        }, timeout);
      });

    return {
      poll,
      authorizationUrl: authorizeUrl,
      stopPolling: clearInterval(pollInterval),
    };
  }

  public async startOauth2Global(
    clientId: string,
    options?: { timeout?: number; pollInterval?: number },
  ): Promise<IOAuth2> {
    const timeout = options?.timeout ?? (600 * 1000); // 10 minute timeout
    const pollInterval = options?.pollInterval ?? 2000; // 2 second poll interval

    const start = await this.startOAuth2GlobalFlow(
      clientId,
      timeout,
    );

    // Curried poll function that returns the promise that resolves when polling is done... or rejects
    // when polling times out
    const poll = () =>
      new Promise<OAuth2Result>((resolve, reject) => {
        const poller = setInterval(() => {
          this.pollOAuth2Flow<PollOAuth2GlobalFlowResult>(start.state).then(
            (pollResult) => {
              if (pollResult && pollResult.status !== "Pending") {
                clearInterval(poller);
                if (pollResult.error) {
                  reject(new OAuth2Error(pollResult.error));
                  return;
                }
                resolve({
                  data: pollResult,
                });
              }
            },
          );
        }, pollInterval);

        setTimeout(() => {
          clearInterval(poller);
          reject(new OAuth2Error("Acquisition timeout"));
        }, timeout);
      });

    return {
      poll,
      authorizationUrl: start.authorizationUrl,
      stopPolling: clearInterval(pollInterval),
    };
  }

  public ui(): UI {
    return new UI(this);
  }

  public getParentMethods(): ChildMethods {
    return this.parentMethods;
  }
}

export function createClient(
  options: ClientOptions = {},
): Client {
  return new Client(connectToParent, options);
}
