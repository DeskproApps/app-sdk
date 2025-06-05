import rootProxyFetch from "@/proxy/root.ts";
import type Client from "@/client/Client.ts";
import { assertEquals, assertInstanceOf } from "@std/assert";

// Mock client
const mockClient = {
  // deno-lint-ignore require-await
  getProxyAuth: async () => ({
    proxyUrl: "https://proxy.example.com",
    token: "test-token",
  }),
} as Client<never>;

Deno.test("rootProxyFetch handles no bespoke headers", async () => {
  const proxyFetch = await rootProxyFetch(mockClient, "getProxyAuth");

  const mockRequestInfo = "https://api.example.com/data";
  const mockInit = {
    method: "GET",
  };

  // deno-lint-ignore require-await
  globalThis.fetch = async (_, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    const headerObj = Object.fromEntries(headers.entries());
    assertEquals(
      JSON.parse(headerObj["x-proxy-headers"]),
      {},
    );

    return new Response("OK", { status: 200 });
  };

  const response = await proxyFetch(mockRequestInfo, mockInit);
  assertInstanceOf(response, Response);
});
