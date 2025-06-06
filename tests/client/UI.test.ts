// deno-lint-ignore-file no-explicit-any
import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "@std/testing/mock";
import UI from "@/client/UI.ts";
import type { AppElement, TargetActionOptions } from "@/client/types.ts";

Deno.test("UI.setBadgeCount calls underlying method with correct count", () => {
  const mockMethods = {
    setBadgeCount: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);

  ui.setBadgeCount(5);

  assertSpyCall(mockMethods.setBadgeCount, 0, { args: [5] });
});

Deno.test("UI.setTitle calls underlying method with correct title", () => {
  const mockMethods = {
    setTitle: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);

  ui.setTitle("Test Title");

  assertSpyCall(mockMethods.setTitle, 0, { args: ["Test Title"] });
});

Deno.test("UI.focus calls underlying focus method", () => {
  const mockMethods = {
    focus: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);

  ui.focus();

  assertSpyCalls(mockMethods.focus, 1);
});

Deno.test("UI.unfocus calls underlying unfocus method", () => {
  const mockMethods = {
    unfocus: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);

  ui.unfocus();

  assertSpyCalls(mockMethods.unfocus, 1);
});

Deno.test("UI.setBlocking calls underlying method with correct value", async () => {
  const mockMethods = {
    setBlocking: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.setBlocking(true);

  assertSpyCall(mockMethods.setBlocking, 0, { args: [true] });
});

Deno.test("UI.openContact calls underlying method with contact details", () => {
  const mockMethods = {
    openContact: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);
  const contact = { id: 123, emailAddress: "test@example.com" };

  ui.openContact(contact);

  assertSpyCall(mockMethods.openContact, 0, { args: [contact] });
});

Deno.test("UI.registerTargetAction calls underlying method with correct params", async () => {
  const mockMethods = {
    registerTargetAction: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);
  const options: TargetActionOptions = {
    title: "string",
    description: "string",
    payload: "Payload",
  };

  await ui.registerTargetAction("test-action", "ticket_addition", options);

  assertSpyCall(mockMethods.registerTargetAction, 0, {
    args: ["test-action", "ticket_addition", options],
  });
});

Deno.test("UI.deregisterTargetAction calls underlying method with correct name", async () => {
  const mockMethods = {
    deregisterTargetAction: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.deregisterTargetAction("test-action");

  assertSpyCall(mockMethods.deregisterTargetAction, 0, {
    args: ["test-action"],
  });
});

Deno.test("UI.registerElement calls underlying method with correct params", () => {
  const mockMethods = {
    registerElement: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);
  const element: AppElement = {
    type: "plus_button",
    payload: "Payload",
  };

  ui.registerElement("test-element", element);

  assertSpyCall(mockMethods.registerElement, 0, {
    args: ["test-element", element],
  });
});

Deno.test("UI.deregisterElement calls underlying method with correct id", () => {
  const mockMethods = {
    deregisterElement: spy(() => {}),
  } as any;
  const ui = new UI(mockMethods);

  ui.deregisterElement("test-element");

  assertSpyCall(mockMethods.deregisterElement, 0, {
    args: ["test-element"],
  });
});

Deno.test("UI.appendContentToActiveTicketReplyBox sends correct message", async () => {
  const mockMethods = {
    sendUIMessage: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.appendContentToActiveTicketReplyBox("test content");

  assertSpyCall(mockMethods.sendUIMessage, 0, {
    args: [{
      type: "append_to_active_ticket_reply_box",
      content: "test content",
    }],
  });
});

Deno.test("UI.appendLinkToActiveTicketReplyBox sends correct message", async () => {
  const mockMethods = {
    sendUIMessage: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.appendLinkToActiveTicketReplyBox(
    "https://example.com",
    "Example",
    "Example Title",
  );

  assertSpyCall(mockMethods.sendUIMessage, 0, {
    args: [{
      type: "append_link_to_active_ticket_reply_box",
      url: "https://example.com",
      text: "Example",
      title: "Example Title",
    }],
  });
});

Deno.test("UI.alertSuccess sends correct message", async () => {
  const mockMethods = {
    sendUIMessage: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.alertSuccess("Success!", 5000);

  assertSpyCall(mockMethods.sendUIMessage, 0, {
    args: [{
      type: "alert_success",
      text: "Success!",
      duration: 5000,
    }],
  });
});

Deno.test("UI.alertError sends correct message", async () => {
  const mockMethods = {
    sendUIMessage: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.alertError("Error!", 3000);

  assertSpyCall(mockMethods.sendUIMessage, 0, {
    args: [{
      type: "alert_error",
      text: "Error!",
      duration: 3000,
    }],
  });
});

Deno.test("UI.alertDismiss sends correct message", async () => {
  const mockMethods = {
    sendUIMessage: spy(() => Promise.resolve()),
  } as any;
  const ui = new UI(mockMethods);

  await ui.alertDismiss();

  assertSpyCall(mockMethods.sendUIMessage, 0, {
    args: [{
      type: "alert_dismiss",
    }],
  });
});
