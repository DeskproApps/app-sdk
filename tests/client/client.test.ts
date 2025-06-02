// deno-lint-ignore-file no-explicit-any
import test, { describe } from "node:test";
import { createClient } from "@/client/client.ts";
import { assertEquals } from "jsr:@std/assert";

describe("DeskproClient", () => {
  test("onShow() callback", () => {
    const client = createClient({ runAfterPageLoad: false });

    let called = false;
    client.onShow(() => called = true);

    client.getParentMethods().onShow({
      settings: {},
      type: "user",
      data: {} as any,
    });

    assertEquals(called, true);
  });

  test("onReady() callback", () => {
    const client = createClient({ runAfterPageLoad: false });

    let called = false;
    client.onReady(() => called = true);
    client.getParentMethods().onReady({
      settings: {},
      type: "user",
      data: {} as any,
    });

    assertEquals(called, true);
  });

  test("onChange() callback", () => {
    const client = createClient({ runAfterPageLoad: false });

    let called = false;
    client.onChange(() => called = true);
    client.getParentMethods().onChange({
      settings: {},
      type: "user",
      data: {} as any,
    });

    assertEquals(called, true);
  });

  test("onAdminSettingsChange() callback", () => {
    const client = createClient({ runAfterPageLoad: false });

    let called = false;
    client.onAdminSettingsChange(() => called = true);
    client.getParentMethods().onAdminSettingsChange({
      settings: {},
      type: "user",
    });

    assertEquals(called, true);
  });

  test("onElementEvent() callback", () => {
    const client = createClient({ runAfterPageLoad: false });

    let called = false;
    client.onElementEvent(() => called = true);
    client.getParentMethods().onElementEvent("id", "type");

    assertEquals(called, true);
  });
});
