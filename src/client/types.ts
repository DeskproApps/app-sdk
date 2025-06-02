// deno-lint-ignore-file no-explicit-any

export type ContextType =
  | "ticket"
  | "user"
  | "organisation"
  | "knowledge_base"
  | "news"
  | "download"
  | "guide_topic"
  | "community_topic"
  | "global"
  | "admin_settings";

type ContextData = {
  app: {
    id: number;
    instanceId: number;
    name: string;
    title: string;
    description: string;
  };
  env: {
    release: string;
    releaseBuildTime: number;
    envId: string;
    isDemo: boolean;
    trialDaysLeft?: number | undefined;
    isCloud: boolean;
  };
  currentAgent: {
    id: number;
    emails: object[];
    primaryEmail: string | null;
    name: string;
    firstName: string;
    lastName: string;
    isAgent: boolean;
    isAdmin: boolean;
    isOnline: boolean;
    isChatOnline: boolean;
    avatarUrl: string | null;
    language: string | null;
    locale: string | null;
    userGroups: {
      id: string;
      isEnabled: boolean;
    }[];
    teams: {
      id: number;
      name: string;
    }[];
  };
};

type BaseContext<Type extends ContextType, Data, Settings> = {
  type: Type;
  data: ContextData & Data;
  settings: Settings;
};

// @todo: Fill this out with real values.
export type DataTicket = Record<string, any>;
export type DataUser = Record<string, any>;
export type DataOrganisation = Record<string, any>;
export type DataKnowledgeBase = Record<string, any>;
export type DataNews = Record<string, any>;
export type DataDownload = Record<string, any>;
export type DataGuideTopic = Record<string, any>;
export type DataCommunityTopic = Record<string, any>;
export type DataGlobal = Record<string, any>;
export type DataAdminSettings = Record<string, any>;

export type Context<Settings> =
  | BaseContext<"ticket", DataTicket, Settings>
  | BaseContext<"user", DataUser, Settings>
  | BaseContext<"organisation", DataOrganisation, Settings>
  | BaseContext<"knowledge_base", DataKnowledgeBase, Settings>
  | BaseContext<"news", DataNews, Settings>
  | BaseContext<"download", DataDownload, Settings>
  | BaseContext<"guide_topic", DataGuideTopic, Settings>
  | BaseContext<"community_topic", DataCommunityTopic, Settings>
  | BaseContext<"global", DataGlobal, Settings>
  | BaseContext<"admin_settings", DataAdminSettings, Settings>;

export interface ProxyAuthPayload {
  proxyUrl: string;
  token: string;
  appInstanceId: string;
}

export type TargetActionType =
  | "ticket_addition"
  | "reply_box_note_item_selection"
  | "on_reply_box_note"
  | "reply_box_email_item_selection"
  | "on_reply_box_email";

export type TargetActionPayload =
  | {
    type: "ticket_addition";
  }
  | {
    type: "reply_box_note_item_selection";
    payload: {
      id: string;
      selected: boolean;
    }[];
  }
  | {
    type: "on_reply_box_note";
    payload: {
      noteId: string;
      note: string;
      attachments: File[];
    };
  }
  | {
    type: "reply_box_email_item_selection";
    payload: {
      id: string;
      selected: boolean;
    }[];
  }
  | {
    type: "on_reply_box_email";
    payload: {
      emailId: string;
      email: string;
      attachments: File[];
    };
  };

export type TicketAdditionTargetAction = {
  type: "ticket_addition";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TicketReplyNoteItemSelectionTargetAction = {
  type: "reply_box_note_item_selection";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
  data: {
    id: string;
    title: string;
    selected: boolean;
  }[];
};

export type OnTicketReplyNoteTargetAction = {
  type: "on_reply_box_note";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TicketReplyEmailItemSelectionTargetAction = {
  type: "reply_box_email_item_selection";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
  data: {
    id: string;
    title: string;
    selected: boolean;
  }[];
};

export type OnTicketReplyEmailTargetAction = {
  type: "on_reply_box_email";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TargetActionData =
  | TicketAdditionTargetAction
  | TicketReplyNoteItemSelectionTargetAction
  | OnTicketReplyNoteTargetAction
  | TicketReplyEmailItemSelectionTargetAction
  | OnTicketReplyEmailTargetAction;

export type TargetAction<P = any> = {
  name: string;
  type: TargetActionType;
  context: Context<any>; // @todo: is this accurate?
  payload?: P;
  subject: string;
};

export type TargetElementEvent<Payload = any> = {
  id: string;
  type: string;
  payload?: Payload;
};

export type AppElementPayload<T = any> = T;

export type ChildMethod = (context: Context<any>) => void;

export type TargetActionChildMethod<Payload = any> = <Payload>(
  action: TargetAction<Payload>,
) => void;

export type ElementEventChildMethod = <Payload = any>(
  id: string,
  type: string,
  payload?: Payload,
) => void;

export type ChildMethods = {
  onReady: ChildMethod;
  onShow: ChildMethod;
  onChange: ChildMethod;
  onTargetAction: TargetActionChildMethod;
  onElementEvent: ElementEventChildMethod;
  onAdminSettingsChange: (settings: Record<string, any>) => void;
  [name: string]:
    | ChildMethod
    | TargetActionChildMethod
    | ElementEventChildMethod;
};

export type TicketSidebarDeskproCallSender = {
  setTitle: (title: string) => void;
  openContact: (
    contact: Partial<{ id: number; emailAddress: string; phoneNumber: string }>,
  ) => void;
  setBadgeCount: (count: number) => void;
};

export type CoreCallSender = {
  _setHeight: (height: number) => void;
  _setWidth: (width: number | string) => void;
  focus: () => void;
  unfocus: () => void;
  _registerElement: (id: string, element: AppElement) => Promise<void>;
  _deregisterElement: (id: string) => Promise<void>;
  _getProxyAuth: () => Promise<ProxyAuthPayload>;
  _getAdminGenericProxyAuth: () => Promise<ProxyAuthPayload>;
  _entityAssociationGet: () => Promise<any>;
  _entityAssociationSet: () => Promise<any>;
  _entityAssociationList: () => Promise<any>;
  _entityAssociationDelete: () => Promise<any>;
  _entityAssociationCountEntities: () => Promise<any>;
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
  _sendDeskproUIMessage: (message: DeskproUIMessage) => Promise<void>;
};

export type DeskproCallSender = CoreCallSender & TicketSidebarDeskproCallSender;

export type DeskproClientOptions = {
  /**
   * Run client after page load when DOM is available
   */
  runAfterPageLoad?: boolean;

  settings?: Record<string, unknown>;

  /**
   * Call client.resize() after any app event is received and
   * associated hook called
   */
  resizeAfterEvents?: boolean;
};

export type AppElement<Payload = any> =
  | {
    type: "plus_button";
    payload?: Payload;
  }
  | {
    type: "home_button";
    payload?: Payload;
  }
  | {
    type: "refresh_button";
  }
  | {
    type: "menu";
    items: {
      title: string;
      payload?: Payload;
    }[];
  }
  | {
    type: "edit_button";
    payload?: Payload;
  }
  | {
    type: "cta_external_link";
    url: string;
    hasIcon: boolean;
  };

export interface StateOptions {
  /**
   * Is this state value user by the backend only? I.e. will it be passed to the apps
   * proxy to be used by a placeholder - therefore not available to the state getters
   * via the JS client
   */
  backend?: boolean;

  /**
   * Set an expiry TTL date for this state var. If an expiry date has passed, then hasState*() and getState*() will
   * not return items for a given key/path
   */
  expires?: Date;
}

export type UserStateOptions = StateOptions;

export interface SetStateResponse {
  isSuccess: boolean;
  errors: string[];
}

export interface GetStateResponse<T> {
  name: string;
  data: T | null;
}

export interface IOAuth2 {
  poll: () => Promise<OAuth2Result>;
  authorizationUrl: string;
  stopPolling: void;
}

export interface OAuth2Result {
  data: {
    access_token: string;
    refresh_token?: string;
    expires?: string | number;
  };
}

export class OAuth2Error extends Error {}

export type StartOAuth2LocalFlowResult = {
  state: string;
  codeChallenge: string;
  callbackUrl: string;
};

export type StartOAuth2GlobalFlowResult = {
  state: string;
  authorizationUrl: string;
};

export type PollOAuth2FlowStatus = "Pending" | "Success" | "Fail";

export type PollOAuth2FlowResult = {
  status: PollOAuth2FlowStatus;
  error?: string | null;
};

export type PollOAuth2LocalFlowResult = PollOAuth2FlowResult & {
  authCode?: string; // always exists when PollOAuth2FlowStatus is "Success"
  codeVerifierProxyPlaceholder: string;
};

export type PollOAuth2GlobalFlowResult = PollOAuth2FlowResult & {
  access_token: string;
  refresh_token: string;
  expires: number | string;
};

export interface TargetActionOptions<Payload = any> {
  title?: string;
  description?: string;
  payload?: Payload;
}

/**
 * Send arbitrary content to the "active" ticket reply box RTE
 */
export type DeskproUIMessageAppendToActiveTicketReplyBox = {
  type: "append_to_active_ticket_reply_box";
  content: string;
};

/**
 * Append link to the "active" ticket reply box RTE
 */
export type DeskproUIMessageAppendLinkToActiveTicketReplyBox = {
  type: "append_link_to_active_ticket_reply_box";
  url: string;
  text: string;
  title?: string;
};

/**
 * Trigger a success alert
 */
export type DeskproUIMessageAlertSuccess = {
  type: "alert_success";
  text: string;
  duration?: number;
};

/**
 * Trigger a error alert
 */
export type DeskproUIMessageAlertError = {
  type: "alert_error";
  text: string;
  duration?: number;
};

/**
 * Dismiss all alerts
 */
export type DeskproUIMessageAlertDismiss = {
  type: "alert_dismiss";
};

export type DeskproUIMessage =
  | DeskproUIMessageAppendToActiveTicketReplyBox
  | DeskproUIMessageAppendLinkToActiveTicketReplyBox
  | DeskproUIMessageAlertSuccess
  | DeskproUIMessageAlertError
  | DeskproUIMessageAlertDismiss;
