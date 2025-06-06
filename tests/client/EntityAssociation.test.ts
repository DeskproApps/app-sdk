// deno-lint-ignore-file no-explicit-any
import { assertSpyCall, spy } from "@std/testing/mock";
import EntityAssociation from "@/client/EntityAssociation.ts";
import { assertEquals } from "@std/assert";

Deno.test("EntityAssociation.get calls underlying method and parses JSON", async () => {
  const mockMethods = {
    get: spy(() => Promise.resolve(JSON.stringify({ foo: "bar" }))),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.get("test-key");

  assertSpyCall(mockMethods.get, 0, {
    args: ["test-entity", "test-name", "test-key"],
  });
  assertEquals(result, { foo: "bar" });
});

Deno.test("EntityAssociation.get returns null when no value exists", async () => {
  const mockMethods = {
    get: spy(() => Promise.resolve(null)),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.get("test-key");

  assertEquals(result, null);
});

Deno.test("EntityAssociation.list calls underlying method with correct params", async () => {
  const mockMethods = {
    list: spy(() => Promise.resolve(["key1", "key2"])),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.list();

  assertSpyCall(mockMethods.list, 0, {
    args: ["test-entity", "test-name"],
  });
  assertEquals(result, ["key1", "key2"]);
});

Deno.test("EntityAssociation.set calls underlying method with stringified value", async () => {
  const mockMethods = {
    set: spy(() => Promise.resolve(true)),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");
  const testValue = { complex: { data: 123 } };

  const result = await entity.set("test-key", testValue);

  assertSpyCall(mockMethods.set, 0, {
    args: ["test-entity", "test-name", "test-key", JSON.stringify(testValue)],
  });
  assertEquals(result, true);
});

Deno.test("EntityAssociation.set calls underlying method with undefined when no value", async () => {
  const mockMethods = {
    set: spy(() => Promise.resolve(true)),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.set("test-key");

  assertSpyCall(mockMethods.set, 0, {
    args: ["test-entity", "test-name", "test-key", undefined],
  });
  assertEquals(result, true);
});

Deno.test("EntityAssociation.delete calls underlying method with correct params", async () => {
  const mockMethods = {
    delete: spy(() => Promise.resolve(true)),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.delete("test-key");

  assertSpyCall(mockMethods.delete, 0, {
    args: ["test-entity", "test-name", "test-key"],
  });
  assertEquals(result, true);
});

Deno.test("EntityAssociation.count calls underlying method with correct params", async () => {
  const mockMethods = {
    count: spy(() => Promise.resolve(5)),
  };
  const entity = new EntityAssociation(mockMethods as any, "test-name", "test-entity");

  const result = await entity.count();

  assertSpyCall(mockMethods.count, 0, {
    args: ["test-entity", "test-name"],
  });
  assertEquals(result, 5);
});