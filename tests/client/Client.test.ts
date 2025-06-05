// deno-lint-ignore-file no-explicit-any
import Client, { createClient } from "@/client/Client.ts";
import { assertInstanceOf } from "jsr:@std/assert";
import UI from "@/client/UI.ts";
import EntityAssociation from "@/client/EntityAssociation.ts";

// Deno.test("onShow() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onShow(() => called = true);

//   client.getParentMethods().onShow({
//     settings: {},
//     type: "user",
//     data: {} as any,
//   });

//   assertEquals(called, true);
// });

// Deno.test("onReady() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onReady(() => called = true);
//   client.getParentMethods().onReady({
//     settings: {},
//     type: "user",
//     data: {} as any,
//   });

//   assertEquals(called, true);
// });

// Deno.test("onChange() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onChange(() => called = true);
//   client.getParentMethods().onChange({
//     settings: {},
//     type: "user",
//     data: {} as any,
//   });

//   assertEquals(called, true);
// });

// Deno.test("onAdminSettingsChange() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onAdminSettingsChange(() => called = true);
//   client.getParentMethods().onAdminSettingsChange({
//     settings: {},
//     type: "user",
//   });

//   assertEquals(called, true);
// });

// Deno.test("onElementEvent() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onElementEvent(() => called = true);
//   client.getParentMethods().onElementEvent("id", "type");

//   assertEquals(called, true);
// });

// Deno.test("onTargetAction() callback", () => {
//   const client = createClient();

//   let called = false;
//   client.onTargetAction(() => called = true);
//   client.getParentMethods().onTargetAction({
//     name: "string",
//     type: "ticket_addition",
//     context: "" as any,
//     subject: "",
//   });

//   assertEquals(called, true);
// });

Deno.test("get ui returns", () => {
  const client = createClient();

  const ui = client.ui();

  assertInstanceOf(ui, UI);
});

Deno.test("get EntityAssociation", () => {
  const client = createClient();

  const entityAssociation = client.getEntityAssociation("foo", "bar");

  assertInstanceOf(entityAssociation, EntityAssociation);
});

Deno.test("can run with default values", () => {
  const client = new Client((() => ({ promise: {} })) as any);

  client.run();
});
