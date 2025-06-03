import type Client from "@/client/Client.ts";
import type { UIMessage } from "@/client/types.ts";

export default class UI {
  constructor(
    private client: Client,
  ) {}

  send(message: UIMessage): Promise<void> {
    return this.client.sendUIMessage(message);
  }

  appendContentToActiveTicketReplyBox(content: string): Promise<void> {
    return this.send({
      type: "append_to_active_ticket_reply_box",
      content,
    });
  }

  appendLinkToActiveTicketReplyBox(
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

  alertSuccess(text: string, duration?: number): Promise<void> {
    return this.send({
      type: "alert_success",
      text,
      duration,
    });
  }

  alertError(text: string, duration?: number): Promise<void> {
    return this.send({
      type: "alert_error",
      text,
      duration,
    });
  }

  alertDismiss(): Promise<void> {
    return this.send({
      type: "alert_dismiss",
    });
  }
}
