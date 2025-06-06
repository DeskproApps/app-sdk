// deno-lint-ignore-file no-explicit-any
import {
  assertSpyCall,
  spy,
} from "@std/testing/mock";
import State from "@/client/State.ts";
import type { GetStateResponse, StateOptions } from "@/client/types.ts";
import { assertEquals } from "@std/assert";

Deno.test("State.setState calls underlying method with correct parameters", async () => {
  const response = { isSuccess: true };
  const mockMethods = {
    setState: spy(() => Promise.resolve(response)),
  };
  const state = new State(mockMethods as any);
  const testValue = { foo: "bar" };
  const options: StateOptions = { backend: true };

  const result = await state.setState("test-key", testValue, options);

  assertSpyCall(mockMethods.setState, 0, {
    args: ["test-key", testValue, options],
  });
  assertEquals(response, result);
});

Deno.test("State.setState calls underlying method without options when not provided", async () => {
  const mockMethods = {
    setState: spy(() => Promise.resolve({ success: true })),
  };
  const state = new State(mockMethods as any);
  const testValue = { foo: "bar" };

  await state.setState("test-key", testValue);

  assertSpyCall(mockMethods.setState, 0, {
    args: ["test-key", testValue, undefined],
  });
});

Deno.test("State.getState calls underlying method with correct key", async () => {
  const mockResponse: GetStateResponse<string>[] = [
    { name: "1", data: "test-value" },
  ];
  const mockMethods = {
    getState: spy(() => Promise.resolve(mockResponse)),
  };
  const state = new State(mockMethods as any);

  const result = await state.getState<string>("test-key");

  assertSpyCall(mockMethods.getState, 0, {
    args: ["test-key"],
  });
  assertEquals(result, mockResponse);
});

Deno.test("State.deleteState calls underlying method with correct key", async () => {
  const mockMethods = {
    deleteState: spy(() => Promise.resolve(true)),
  };
  const state = new State(mockMethods as any);

  const result = await state.deleteState("test-key");

  assertSpyCall(mockMethods.deleteState, 0, {
    args: ["test-key"],
  });
  assertEquals(result, true);
});

Deno.test("State.hasState calls underlying method with correct key", async () => {
  const mockMethods = {
    hasState: spy(() => Promise.resolve(true)),
  };
  const state = new State(mockMethods as any);

  const result = await state.hasState("test-key");

  assertSpyCall(mockMethods.hasState, 0, {
    args: ["test-key"],
  });
  assertEquals(result, true);
});