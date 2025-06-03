import agentProxyFetch from "@/proxy/agent.ts";
import type Client from "@/client/Client.ts";
import { assertEquals, assertInstanceOf, assertRejects } from "@std/assert";

// Mock client
const mockClient = {
  // deno-lint-ignore require-await
  getProxyAuth: async () => ({
    proxyUrl: "https://proxy.example.com",
    token: "test-token",
  }),
} as Client;

Deno.test("agentProxyFetch throws when client not loaded", async () => {
  await assertRejects(async () => {
    await agentProxyFetch({} as Client);
  });
});

Deno.test("agentProxyFetch returns a proxy fetch function", async () => {
  const proxyFetch = await agentProxyFetch(mockClient);

  const mockRequestInfo = "https://api.example.com/data";
  const mockInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // deno-lint-ignore require-await
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    assertEquals(input, "https://proxy.example.com");

    const headers = new Headers(init?.headers);
    const headerObj = Object.fromEntries(headers.entries());

    assertEquals(init?.method, "POST");
    assertEquals(headerObj["x-proxy-authorization"], "Bearer test-token");
    assertEquals(headerObj["x-proxy-url"], "https://api.example.com/data");
    assertEquals(headerObj["x-proxy-method"], "GET");

    assertEquals(
      JSON.parse(headerObj["x-proxy-headers"]),
      { "Content-Type": "application/json" },
    );

    return new Response("OK", { status: 200 });
  };

  const response = await proxyFetch(mockRequestInfo, mockInit);
  assertInstanceOf(response, Response);

  const text = await response.text();
  assertEquals(text, "OK");
});
