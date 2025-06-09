// deno-lint-ignore-file no-explicit-any

/**
 * The different types of contexts available in Deskpro apps.
 * Each context represents a specific area or entity within Deskpro.
 * This matches up with App Target (defined in manifest.json).
 */
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

/**
 * Base data structure that's common to all contexts.
 * Contains information about the app, environment, and current agent.
 */
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

/**
 * The base context structure that all specific contexts extend from.
 * @template Type - The context type (from ContextType)
 * @template Data - Additional data specific to this context
 * @template Settings - The app settings (from manifest.json)
 */
type BaseContext<Type extends ContextType, Data, Settings> = {
  type: Type;
  data: ContextData & Data;
  settings: Settings;
};

/**
 * Contact User data specific to tickets
 */
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

/**
 * User data specific to tickets
 */
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

/**
 * Ticket-specific data included in ticket contexts
 */
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

/**
 * User-specific data included in user contexts
 */
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

/**
 * Organization-specific data included in organization contexts
 */
export type DataOrganisation = {
  organisation: {
    id: string;
    name: string;
    summary: string;
    dateCreated: string;
    customFields: Record<string, any>;
  };
};

/**
 * Knowledge base article data included in knowledge base contexts
 */
export type DataKnowledgeBase = {
  article: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};

/**
 * News post data included in news contexts
 */
export type DataNews = {
  post: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};

/**
 * Download file data included in download contexts
 */
export type DataDownload = {
  file: {
    id: string;
    title: string;
    content: string;
    status: string;
    permalink: string;
  };
};

/**
 * Guide topic data included in guide topic contexts
 */
export type DataGuideTopic = {
  topic: {
    id: string;
    title: string;
    content: string;
    status: string;
  };
};

/**
 * Community topic data included in community topic contexts
 */
export type DataCommunityTopic = {
  topic: {
    id: string;
    title: string;
    content: string;
    isReviewed: boolean;
  };
};

/**
 * Empty global context data (stub)
 */
export type DataGlobal = {
  global?: undefined;
};

/**
 * Empty admin settings context data (stub)
 */
export type DataAdminSettings = {
  adminSettings?: undefined;
};

/**
 * Context for when the app target is "ticket_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextTicket<Settings> = BaseContext<
  "ticket",
  DataTicket,
  Settings
>;

/**
 * Context for when the app target is "user_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextUser<Settings> = BaseContext<"user", DataUser, Settings>;

/**
 * Context for when the app target is "organisation_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextOrganisation<Settings> = BaseContext<
  "organisation",
  DataOrganisation,
  Settings
>;

/**
 * Context for when the app target is "content_knowledge_base_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextKnowledgeBase<Settings> = BaseContext<
  "knowledge_base",
  DataKnowledgeBase,
  Settings
>;

/**
 * Context for when the app target is "content_news_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextNews<Settings> = BaseContext<"news", DataNews, Settings>;

/**
 * Context for when the app target is "content_download_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextDownload<Settings> = BaseContext<
  "download",
  DataDownload,
  Settings
>;

/**
 * Context for when the app target is "content_guide_topic_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextGuideTopic<Settings> = BaseContext<
  "guide_topic",
  DataGuideTopic,
  Settings
>;

/**
 * Context for when the app target is "community_topic_sidebar".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextCommunityTopic<Settings> = BaseContext<
  "community_topic",
  DataCommunityTopic,
  Settings
>;

/**
 * Context for when the app target is "global".
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextGlobal<Settings> = BaseContext<
  "global",
  DataGlobal,
  Settings
>;

/**
 * Context when the app Target is an admin setting.
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ContextAdminSettings<Settings> = BaseContext<
  "admin_settings",
  DataAdminSettings,
  Settings
>;

/**
 * Union type representing all supported context types.
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type Context<Settings> =
  | ContextTicket<Settings>
  | ContextUser<Settings>
  | ContextOrganisation<Settings>
  | ContextKnowledgeBase<Settings>
  | ContextNews<Settings>
  | ContextDownload<Settings>
  | ContextGuideTopic<Settings>
  | ContextCommunityTopic<Settings>
  | ContextGlobal<Settings>
  | ContextAdminSettings<Settings>;

/**
 * Payload for proxy authentication requests
 */
export interface ProxyAuthPayload {
  proxyUrl: string;
  token: string;
  appInstanceId: string;
}

/**
 * Types of target actions that can be performed in Deskpro.
 */
export type TargetActionType =
  | "ticket_addition"
  | "reply_box_note_item_selection"
  | "on_reply_box_note"
  | "reply_box_email_item_selection"
  | "on_reply_box_email";

/**
 * Payloads for different target action types.
 */
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

/**
 * Target action for ticket addition.
 */
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

/**
 * Target action for note item selection in reply box.
 */
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

/**
 * Target action when a note is added to reply box.
 */
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

/**
 * Target action for email item selection in reply box.
 */
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

/**
 * Target action when an email is added to reply box.
 */
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

/**
 * Union type representing all supported target action data.
 */
export type TargetActionData =
  | TicketAdditionTargetAction
  | TicketReplyNoteItemSelectionTargetAction
  | OnTicketReplyNoteTargetAction
  | TicketReplyEmailItemSelectionTargetAction
  | OnTicketReplyEmailTargetAction;

/**
 * A target action event with context and payload
 * which is triggered on user action in Deskpro.
 *
 * @template Settings - The app settings (from manifest.json)
 * @template Payload - The action payload type
 */
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

/**
 * An event from a target element.
 *
 * @template Payload - The event payload type
 */
export type TargetElementEvent<Payload = any> = {
  id: string;
  type: string;
  payload?: Payload;
};

/**
 * Function type for handling element events.
 *
 * @template Payload - The event payload type
 */
export type ElementEvent<Payload> = (
  elementEvent: { id: string; type: string; payload?: Payload },
) => void;

/**
 * Union type representing supported app UI elements.
 *
 * @template Payload - The element payload type
 */
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

/**
 * Options for state management.
 */
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

/**
 * Response from setState operations.
 */
export interface SetStateResponse {
  isSuccess: boolean;
  errors: string[];
}

/**
 * Response from getState operations.
 *
 * @template T - The type of the state data
 */
export interface GetStateResponse<T> {
  name: string;
  data: T | null;
}

/**
 * Interface for OAuth2 operations.
 */
export interface IOAuth2 {
  poll: () => Promise<OAuth2Result>;
  authorizationUrl: string;
  stopPolling: void;
}

/**
 * Result from OAuth2 operations.
 */
export interface OAuth2Result {
  data: {
    access_token: string;
    refresh_token?: string;
    expires?: string | number;
  };
}

/**
 * Error class for OAuth2 specific operations.
 */
export class OAuth2Error extends Error {}

/**
 * Result from starting a local OAuth2 flow.
 */
export type StartOAuth2LocalFlowResult = {
  state: string;
  codeChallenge: string;
  callbackUrl: string;
};

/**
 * Result from starting a global OAuth2 flow.
 */
export type StartOAuth2GlobalFlowResult = {
  state: string;
  authorizationUrl: string;
};

/**
 * Possible statuses for OAuth2 flow polling.
 */
export type PollOAuth2FlowStatus = "Pending" | "Success" | "Fail";

/**
 * Base result for OAuth2 flow polling.
 */
export type PollOAuth2FlowResult = {
  status: PollOAuth2FlowStatus;
  error?: string | null;
};

/**
 * Result for local OAuth2 flow polling.
 */
export type PollOAuth2LocalFlowResult = PollOAuth2FlowResult & {
  authCode?: string; // always exists when PollOAuth2FlowStatus is "Success"
  codeVerifierProxyPlaceholder: string;
};

/**
 * Result for global OAuth2 flow polling.
 */
export type PollOAuth2GlobalFlowResult = PollOAuth2FlowResult & {
  access_token: string;
  refresh_token: string;
  expires: number | string;
};

/**
 * Options for target actions.
 *
 * @template Payload - The action payload type
 */
export interface TargetActionOptions<Payload = any> {
  title?: string;
  description?: string;
  payload?: Payload;
}

/**
 * Message for appending content to the active ticket reply box.
 */
export type UIMessageAppendToActiveTicketReplyBox = {
  type: "append_to_active_ticket_reply_box";
  content: string;
};

/**
 * Message for appending a link to the active ticket reply box.
 */
export type UIMessageAppendLinkToActiveTicketReplyBox = {
  type: "append_link_to_active_ticket_reply_box";
  url: string;
  text: string;
  title?: string;
};

/**
 * Message for showing a success alert.
 */
export type UIMessageAlertSuccess = {
  type: "alert_success";
  text: string;
  duration?: number;
};

/**
 * Message for showing an error alert.
 */
export type UIMessageAlertError = {
  type: "alert_error";
  text: string;
  duration?: number;
};

/**
 * Message for dismissing alert.
 */
export type UIMessageAlertDismiss = {
  type: "alert_dismiss";
};

/**
 * Union type representing all supported UI messages.
 */
export type UIMessage =
  | UIMessageAppendToActiveTicketReplyBox
  | UIMessageAppendLinkToActiveTicketReplyBox
  | UIMessageAlertSuccess
  | UIMessageAlertError
  | UIMessageAlertDismiss;

/**
 * Map of listener callbacks for different events in Deskpro apps.
 * Each key corresponds to an event type, and the value is a function that takes
 * the relevant context or action as an argument.
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ListenerCallbackMap<Settings extends object> = {
  ready: (context: Context<Settings>) => void;
  show: (context: Context<Settings>) => void;
  change: (context: Context<Settings>) => void;
  targetAction: (action: TargetAction<Settings>) => void;
  elementEvent: (action: ElementEvent<any>) => void;
  adminSettingsChange: (action: Record<string, any>) => void;
};

/**
 * Type for listener callback names.
 * This is a union of the keys from ListenerCallbackMap.
 *
 * @template Settings - The app settings (from manifest.json)
 */
export type ListenerCallbackName<Settings extends object> = keyof ListenerCallbackMap<
  Settings
>;