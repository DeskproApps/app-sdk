import type {
  AppElement,
  TargetActionOptions,
  TargetActionType,
  UIMessage,
} from "@/client/types.ts";

/**
 * Provides methods to interact with the user interface of the application.
 * This class allows sending various UI-related messages to control or modify
 * the UI state, such as manipulating ticket reply boxes or showing alerts.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/deskpro-ui
 *
 * @template Settings - The app settings (from manifest.json)
 *
 * @example
 * ```typescript
 * import { createClient } from "@deskpro/app-sdk";
 *
 * const client = createClient();
 *
 * client.run().then(() => {
 *   client.ui().setTitle("My New Title");
 *   client.ui().setBadgeCount(42);
 * });
 * ```
 */
export default class UI {
  /**
   * Creates a new UI instance associated with the given client.
   */
  constructor(
    private methods: {
      setBadgeCount: (count: number) => void;
      setTitle: (title: string) => void;
      focus: () => void;
      unfocus: () => void;
      setBlocking: (blocking: boolean) => Promise<void>;
      openContact: (
        contact: Partial<
          { id: number; emailAddress: string; phoneNumber: string }
        >,
      ) => void;
      sendUIMessage: (message: UIMessage) => Promise<void>;
      registerTargetAction: (
        name: string,
        type: TargetActionType,
        options?: TargetActionOptions,
      ) => Promise<void>;
      deregisterTargetAction: (name: string) => Promise<void>;
      registerElement: (id: string, element: AppElement) => void;
      deregisterElement: (id: string) => void;
    },
  ) {}

  public registerTargetAction(
    name: string,
    type: TargetActionType,
    options?: TargetActionOptions,
  ): Promise<void> {
    return this.methods.registerTargetAction(name, type, options);
  }

  public deregisterTargetAction(
    name: string,
  ): Promise<void> {
    return this.methods.deregisterTargetAction(name);
  }

  /**
   * Registers a target action that can be invoked from the UI.
   */
  public registerElement(id: string, element: AppElement): void {
    return this.methods.registerElement(id, element);
  }

  /**
   * Deregisters an element from the UI.
   *
   * @param id - The ID of the element to deregister
   */
  public deregisterElement(id: string): void {
    return this.methods.deregisterElement(id);
  }

  /**
   * Sets whether the app is blocking the UI.
   * Used to indicate that the app is performing a long-running
   * operation and prevents the user from interacting with the UI.
   */
  public setBlocking(blocking: boolean): Promise<void> {
    return this.methods.setBlocking(blocking);
  }

  /**
   * Sets the badge count for the app, set to 0 to clear the badge.
   *
   * @param count - The badge count to set for the app.
   */
  public setBadgeCount(count: number): void {
    this.methods.setBadgeCount(count);
  }

  /**
   * Sets the title of the app, which is displayed in the app header.
   *
   * @param title - The title to set for the app.
   */
  public setTitle(title: string): void {
    this.methods.setTitle(title);
  }

  /**
   * Bring the app to the foreground and focus it.
   */
  public focus(): void {
    this.methods.focus();
  }
  /**
   * Unfocus the app, sending it to the background.
   */
  public unfocus(): void {
    this.methods.unfocus();
  }

  /**
   * Open the Contact UI in Deskpro using the provided contact details.
   */
  public openContact(
    contact: Partial<{ id: number; emailAddress: string; phoneNumber: string }>,
  ): void {
    this.methods.openContact(contact);
  }

  /**
   * Sends a raw UI message to the client. This is the underlying method used by
   * all other convenience methods in this class.
   */
  private send(message: UIMessage): Promise<void> {
    return this.methods.sendUIMessage(message);
  }

  /**
   * Appends content to the active ticket's reply box.
   * Useful for pre-filling reply content or adding templated responses.
   *
   * @param {string} content - The text content to append
   */
  public appendContentToActiveTicketReplyBox(content: string): Promise<void> {
    return this.send({
      type: "append_to_active_ticket_reply_box",
      content,
    });
  }

  /**
   * Appends a clickable link to the active ticket reply box.
   * Can be used to provide quick reference links or standard responses.
   *
   * @param {string} url - The URL the link should point to
   * @param {string} text - The display text for the link
   * @param {string} [title] - Optional title/tooltip for the link
   */
  public appendLinkToActiveTicketReplyBox(
    url: string,
    text: string,
    title?: string,
  ): Promise<void> {
    return this.send({
      type: "append_link_to_active_ticket_reply_box",
      url,
      text,
      title,
    });
  }

  /**
   * Shows a success alert message to the user.
   *
   * @param {string} text - The message text to display
   * @param {number} [duration] - Optional duration in milliseconds to show the alert
   */
  public alertSuccess(text: string, duration?: number): Promise<void> {
    return this.send({
      type: "alert_success",
      text,
      duration,
    });
  }

  /**
   * Shows an error alert message to the user.
   *
   * @param {string} text - The message text to display
   * @param {number} [duration] - Optional duration in milliseconds to show the alert
   */
  public alertError(text: string, duration?: number): Promise<void> {
    return this.send({
      type: "alert_error",
      text,
      duration,
    });
  }

  /**
   * Dismisses any currently visible alert.
   */
  public alertDismiss(): Promise<void> {
    return this.send({
      type: "alert_dismiss",
    });
  }
}
