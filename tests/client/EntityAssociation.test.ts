import { assertEquals } from "jsr:@std/assert";
import type Client from "@/client/Client.ts";
import EntityAssociation from "@/client/EntityAssociation.ts";

// Helper to create a stub Client with default method overrides
function createStubClient(overrides: Partial<Client<never>>): Client<never> {
  return {
    entityAssociationGet: () => Promise.resolve(undefined),
    entityAssociationSet: () => Promise.resolve(),
    entityAssociationList: () => Promise.resolve([]),
    entityAssociationDelete: () => Promise.resolve(),
    ...overrides,
  } as Client<never>;
}

Deno.test("get() returns parsed value", async () => {
  const client = createStubClient({
    entityAssociationGet: () =>
      Promise.resolve(JSON.stringify({ hello: "world" })),
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");
  const result = await assoc.get<{ hello: string }>("key");
  assertEquals(result, { hello: "world" });
});

Deno.test("get() returns null for undefined", async () => {
  const client = createStubClient({
    entityAssociationGet: () => Promise.resolve(null),
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");
  const result = await assoc.get("missing");
  assertEquals(result, null);
});

Deno.test("list() returns keys", async () => {
  const client = createStubClient({
    entityAssociationList: () => Promise.resolve(["a", "b"]),
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");
  const result = await assoc.list();
  assertEquals(result, ["a", "b"]);
});

Deno.test("set() sends serialized value", async () => {
  let capturedKey = "";
  let capturedValue = "";

  const client = createStubClient({
    entityAssociationSet: (_e, _n, key, value) => {
      capturedKey = key;
      capturedValue = value ?? "";
      return Promise.resolve(true);
    },
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");

  assertEquals(true, await assoc.set("myKey", { foo: "bar" }));
  assertEquals(capturedKey, "myKey");
  assertEquals(capturedValue, JSON.stringify({ foo: "bar" }));
});

Deno.test("set() with undefined value passes undefined", async () => {
  let captured = "not undefined";

  const client = createStubClient({
    entityAssociationSet: (_e, _n, _k, v) => {
      captured = typeof v === "undefined" ? "undefined" : "value";
      return Promise.resolve(true);
    },
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");

  assertEquals(true, await assoc.set("empty"));
  assertEquals(captured, "undefined");
});

Deno.test("delete() is called with correct key", async () => {
  let deletedKey = "";

  const client = createStubClient({
    entityAssociationDelete: (_e, _n, key) => {
      deletedKey = key;
      return Promise.resolve(true);
    },
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");

  assertEquals(true, await assoc.delete("delete-me"));
  assertEquals(deletedKey, "delete-me");
});

Deno.test("count() is called", async () => {
  const client = createStubClient({
    entityAssociationCountEntities: (_e, _n) => {
      return Promise.resolve(12);
    },
  });

  const assoc = new EntityAssociation(client, "Test", "entity-1");

  assertEquals(12, await assoc.count());
});
