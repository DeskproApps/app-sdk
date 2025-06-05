import { assertSpyCalls, spy } from "https://deno.land/std/testing/mock.ts";
import { assertEquals } from "jsr:@std/assert";
import UI from "@/client/UI.ts";
import type Client from "@/client/Client.ts";

Deno.test("UI methods call client.sendUIMessage with correct messages", async (test) => {
  const mockSend = spy((_msg: unknown) => Promise.resolve());
  const mockClient = { sendUIMessage: mockSend };
  const ui = new UI(mockClient as unknown as Client<never>);

  await test.step("send() forwards the message as-is", async () => {
    const msg = { type: "custom", data: 123 };
    // deno-lint-ignore no-explicit-any
    await ui.send(msg as any);
    assertSpyCalls(mockSend, 1);
    assertEquals(mockSend.calls[0].args[0], msg);
  });

  await test.step(
    "appendContentToActiveTicketReplyBox() sends correct message",
    async () => {
      await ui.appendContentToActiveTicketReplyBox("Hello");
      assertSpyCalls(mockSend, 2);
      assertEquals(mockSend.calls[1].args[0], {
        type: "append_to_active_ticket_reply_box",
        content: "Hello",
      });
    },
  );

  await test.step(
    "appendLinkToActiveTicketReplyBox() sends correct message with optional title",
    async () => {
      await ui.appendLinkToActiveTicketReplyBox(
        "http://example.com",
        "Click here",
        "Example",
      );
      assertSpyCalls(mockSend, 3);
      assertEquals(mockSend.calls[2].args[0], {
        type: "append_link_to_active_ticket_reply_box",
        url: "http://example.com",
        text: "Click here",
        title: "Example",
      });

      await ui.appendLinkToActiveTicketReplyBox(
        "http://example.com",
        "Click here",
      );
      assertSpyCalls(mockSend, 4);
      assertEquals(mockSend.calls[3].args[0], {
        type: "append_link_to_active_ticket_reply_box",
        url: "http://example.com",
        text: "Click here",
        title: undefined,
      });
    },
  );

  await test.step("alertSuccess() sends success alert message", async () => {
    await ui.alertSuccess("Success!", 2000);
    assertSpyCalls(mockSend, 5);
    assertEquals(mockSend.calls[4].args[0], {
      type: "alert_success",
      text: "Success!",
      duration: 2000,
    });
  });

  await test.step("alertError() sends error alert message", async () => {
    await ui.alertError("Oops!", 1500);
    assertSpyCalls(mockSend, 6);
    assertEquals(mockSend.calls[5].args[0], {
      type: "alert_error",
      text: "Oops!",
      duration: 1500,
    });
  });

  await test.step("alertDismiss() sends dismiss alert message", async () => {
    await ui.alertDismiss();
    assertSpyCalls(mockSend, 7);
    assertEquals(mockSend.calls[6].args[0], {
      type: "alert_dismiss",
    });
  });
});
