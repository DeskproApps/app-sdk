// deno-lint-ignore-file no-explicit-any
import { assert, assertEquals, assertRejects, assertThrows } from "@std/assert";
import Client, {createClient} from "@/client/Client.ts";

Deno.test("Client can be instantiated", () => {
  const client = new Client(() => ({} as any));
  assert(client instanceof Client);
});

Deno.test("createClient returns a Client instance", () => {
  const client = createClient();
  assert(client instanceof Client);
});

Deno.test("Client emits events to subscribers", async () => {
  let readyCallback: (() => void) | undefined = undefined;
  const client = new Client(((callbacks: any) => {
    readyCallback = (callbacks as any).methods._onReady;

    return {
      promise: {}
    };
  }) as any);

  await client.run();

  let called = 0;
  const callback = () => { called += 1; };
  
  client.subscribe("ready", callback);
  readyCallback!();
  assertEquals(1, called);
  
  client.unsubscribe("ready", callback);
  readyCallback!();
  assertEquals(1, called); // Did not increase.
});

Deno.test("Client.ui() returns UI instance", () => {
  const client = new Client(() => ({} as any));
  const ui = client.ui();
  assert(ui);
  // Basic check that it has expected methods
  assert(typeof ui.setTitle === "function");
});

Deno.test("Client.state() returns State instance", () => {
  const client = new Client(() => ({} as any));
  const state = client.state();
  assert(state);
  // Basic check that it has expected methods
  assert(typeof state.setState === "function");
});

Deno.test("Client.userState() returns State instance", () => {
  const client = new Client(() => ({} as any));
  const userState = client.userState();
  assert(userState);
  // Basic check that it has expected methods
  assert(typeof userState.setState === "function");
});

Deno.test("Client.settings() returns Setting instance", () => {
  const client = new Client(() => ({} as any));
  const settings = client.settings();
  assert(settings);
  // Basic check that it has expected methods
  assert(typeof settings.setSetting === "function");
});

Deno.test("Client.oauth() returns OAuth instance", () => {
  const client = new Client(() => ({} as any));
  const oauth = client.oauth();
  assert(oauth);
});

Deno.test("Client.getEntityAssociation() returns EntityAssociation instance", () => {
  const client = new Client(() => ({} as any));
  const ea = client.getEntityAssociation("test", "123");
  assert(ea);
  // Basic check that it has expected methods
  assert(typeof ea.get === "function");
});

Deno.test("Client.proxy() returns Proxy instance for agent role", async () => {
  const client = new Client(() => ({
    promise: {
      _getProxyAuth: () => Promise.resolve({}),
    }
  } as any));
  await client.run();
  const proxy = client.proxy("agent");
  assert(proxy);
});

Deno.test("Client.proxy() returns Proxy instance for admin role", async() => {
  const client = new Client(() => ({
    promise: {
      _getAdminGenericProxyAuth: () => Promise.resolve({}),
    }
  } as any));
  await client.run();
  const proxy = client.proxy("admin");
  assert(proxy);
});

Deno.test("Client.proxy() throws error if run() not called", () => {
  const client = new Client(() => ({} as any));
  assertThrows(
    () => client.proxy("agent"),
    Error,
    "Deskpro getProxyAuth() is undefined",
  );
});