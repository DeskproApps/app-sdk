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

type DataTicketUserContact = {
  id: string;
  comment: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
} | {
  id: string;
  comment: string;
  number: string;
  type: string;
  code: string;
} | {
  id: string;
  comment: string;
  url: string;
} | {
  id: string;
  comment: string;
  type: string;
  username: string;
  profileUrl: string;
} | {
  id: string;
  comment: string;
  type: string;
  username: string;
} | undefined;
type DataTicketUser = {
  id: string;
  email: string;
  emails: string[];
  firstName: string;
  lastName: string;
  displayName: string;
  language: string;
  locale: string;
  phoneNumbers: {
    id: string;
    ext: string;
    label: string;
    number: string;
    guessedType: string;
  }[];
  primaryOrgMember: {
    position: string;
    isManager: string;
    organization: {
      id: string;
      name: string;
    };
  } | undefined;
  orgMembers: {
    position: string;
    isManager: string;
    organization: {
      id: string;
      name: string;
    };
  }[];
  contacts: DataTicketUserContact[];
};
export type DataTicket = {
  ticket: {
    id: string;
    permalinkUrl: string;
    subject: string;
    status: string;
    creationSystem: string;
    emailAccountAddress: string;
    receivedEmailAccountAddress: string;
    primaryUser: DataTicketUser & {
      customFields: Record<string, any>;
    };
    followers: DataTicketUser[];
    organization: {
      id: string;
      name: string;
      customFields: Record<string, any>;
    };
    attachments: {
      id: string;
      filename: string;
      filesize: string;
      contentType: string;
      downloadUrl: string;
    }[];
    customFields: Record<string, any>;
    billingCharges: {
      id: string;
      amount: string;
      chargeTime: string;
      dateCreated: string;
      fields: Record<string, any>;
    }[];
    team?: {
      id: string;
      name: string;
    } | undefined;
    ref: string;
    labels: {
      id: string;
      name: string;
    }[];
    department?:
      | {
        id: string | undefined;
        name: string;
      }
      | undefined;
    urgency: string;
    agent: DataTicketUser;
    ccs: DataTicketUser[];
    createdAt: string | undefined;
    resolvedAt: string | undefined;
    archivedAt: string | undefined;
    lastAgentReplyAt: string | undefined;
    lastUserReplyAt: string | undefined;
    statusChangedAt: string | undefined;
  };
};
export type DataUser = {
  user: {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    titlePrefix: string;
    isDisabled: boolean | "";
    isAgent: boolean | "";
    isConfirmed: boolean | "";
    emails: string[];
    primaryEmail: string;
    customFields: Record<string, any>;
    language: string;
    locale: string;
    phoneNumbers: {
      id: string;
      number: string;
      guessedType: string;
      ext: string | null;
      label: string | null;
    }[];
  };
};
export type DataOrganisation = {
  organisation: {
    id: string;
    name: string;
    summary: string;
    dateCreated: string;
    customFields: Record<string, any>;
  };
};
export type DataKnowledgeBase = {
  article: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};
export type DataNews = {
  post: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};
export type DataDownload = {
  file: {
    id: string;
    title: string;
    content: string;
    status: string;
    permalink: string;
  };
};
export type DataGuideTopic = {
  topic: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};
export type DataCommunityTopic = {
  topic: {
    id: string;
    title: string;
    content: string;
    isReviewed: boolean;
  };
};

// This is a stub.
export type DataGlobal = {
  global?: undefined;
};

// This is a stub.
export type DataAdminSettings = {
  adminSettings?: undefined;
};

export type ContextTicket<Settings> = BaseContext<
  "ticket",
  DataTicket,
  Settings
>;
export type ContextUser<Settings> = BaseContext<"user", DataUser, Settings>;
export type ContextOrganisation<Settings> = BaseContext<
  "organisation",
  DataOrganisation,
  Settings
>;
export type ContextKnowledge_base<Settings> = BaseContext<
  "knowledge_base",
  DataKnowledgeBase,
  Settings
>;
export type ContextNews<Settings> = BaseContext<"news", DataNews, Settings>;
export type ContextDownload<Settings> = BaseContext<
  "download",
  DataDownload,
  Settings
>;
export type ContextGuideTopic<Settings> = BaseContext<
  "guide_topic",
  DataGuideTopic,
  Settings
>;
export type ContextCommunityTopic<Settings> = BaseContext<
  "community_topic",
  DataCommunityTopic,
  Settings
>;
export type ContextGlobal<Settings> = BaseContext<
  "global",
  DataGlobal,
  Settings
>;

// This one is internally omitted, it doesn't get sent from Deskpro itselfs.
export type ContextAdminSettings<Settings> = BaseContext<
  "admin_settings",
  DataAdminSettings,
  Settings
>;

export type Context<Settings> =
  | ContextTicket<Settings>
  | ContextUser<Settings>
  | ContextOrganisation<Settings>
  | ContextKnowledge_base<Settings>
  | ContextNews<Settings>
  | ContextDownload<Settings>
  | ContextGuideTopic<Settings>
  | ContextCommunityTopic<Settings>
  | ContextGlobal<Settings>
  | ContextAdminSettings<Settings>;

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

export type TargetAction<
  Settings extends object,
  Payload = any,
> = {
  name: string;
  type: TargetActionType;
  context: Context<Settings>;
  payload?: Payload;
  subject: string;
};

export type TargetElementEvent<Payload = any> = {
  id: string;
  type: string;
  payload?: Payload;
};

export type AppElementPayload<T = any> = T;

export type ChildMethod<Settings> = (context: Context<Settings>) => void;

export type ElementEvent<Payload> = (
  elementEvent: { id: string; type: string; payload?: Payload },
) => void;

export enum EventType {
  READY = "ready.app.deskpro",
  SHOW = "show.app.deskpro",
  CHANGE = "change.app.deskpro",
  TARGET_ACTION = "target_action.app.deskpro",
  TARGET_ELEMENT_EVENT = "target_element_event.app.deskpro",
  ADMIN_SETTINGS_CHANGE = "change.settings.admin.app.deskpro",
}

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
export type UIMessageAppendToActiveTicketReplyBox = {
  type: "append_to_active_ticket_reply_box";
  content: string;
};

/**
 * Append link to the "active" ticket reply box RTE
 */
export type UIMessageAppendLinkToActiveTicketReplyBox = {
  type: "append_link_to_active_ticket_reply_box";
  url: string;
  text: string;
  title?: string;
};

/**
 * Trigger a success alert
 */
export type UIMessageAlertSuccess = {
  type: "alert_success";
  text: string;
  duration?: number;
};

/**
 * Trigger a error alert
 */
export type UIMessageAlertError = {
  type: "alert_error";
  text: string;
  duration?: number;
};

/**
 * Dismiss all alerts
 */
export type UIMessageAlertDismiss = {
  type: "alert_dismiss";
};

export type UIMessage =
  | UIMessageAppendToActiveTicketReplyBox
  | UIMessageAppendLinkToActiveTicketReplyBox
  | UIMessageAlertSuccess
  | UIMessageAlertError
  | UIMessageAlertDismiss;
