import { assertSpyCall, spy } from "@std/testing/mock";
import Proxy from "@/client/Proxy.ts";
import type { ProxyAuthPayload } from "@/client/types.ts";

Deno.test("Proxy.fetch returns a function that calls fetch with correct proxy headers (string URL)", async () => {
  const fetchSpy = spy(() => Promise.resolve(new Response()));
  globalThis.fetch = fetchSpy;
  const mockAuth: ProxyAuthPayload = {
    proxyUrl: "https://proxy.deskpro.com",
    token: "test-token-123",
    appInstanceId: "app-instance-456",
  };
  const authenticator = spy(() => Promise.resolve(mockAuth));
  const proxy = new Proxy(authenticator);

  const proxyFetch = await proxy.fetch();
  await proxyFetch("https://api.example.com/data", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  assertSpyCall(authenticator, 0);
  assertSpyCall(fetchSpy, 0, {
    args: [
      mockAuth.proxyUrl,
      {
        method: "POST",
        headers: {
          "X-Proxy-Headers": JSON.stringify({
            "Content-Type": "application/json",
          }),
          "X-Proxy-Authorization": `Bearer ${mockAuth.token}`,
          "X-Proxy-Url": "https://api.example.com/data",
          "X-Proxy-Method": "GET",
        },
      },
    ],
  });
});

Deno.test("Proxy.fetch returns a function that calls fetch with correct proxy headers (Request object)", async () => {
  const fetchSpy = spy(() => Promise.resolve(new Response()));
  globalThis.fetch = fetchSpy;
  const mockAuth: ProxyAuthPayload = {
    proxyUrl: "https://proxy.deskpro.com",
    token: "test-token-123",
    appInstanceId: "app-instance-456",
  };
  const authenticator = spy(() => Promise.resolve(mockAuth));
  const proxy = new Proxy(authenticator);

  const proxyFetch = await proxy.fetch();
  const request = new Request("https://api.example.com/data", {
    method: "POST",
    headers: { "Authorization": "Bearer abc123" },
  });
  await proxyFetch(request);

  assertSpyCall(fetchSpy, 0, {
    args: [
      mockAuth.proxyUrl,
      {
        method: "POST",
        headers: {
          "X-Proxy-Headers": JSON.stringify({}),
          "X-Proxy-Authorization": `Bearer ${mockAuth.token}`,
          "X-Proxy-Url": "https://api.example.com/data",
          "X-Proxy-Method": "POST",
        },
      },
    ],
  });
});

Deno.test("Proxy.fetch uses GET method by default when not specified", async () => {
  const fetchSpy = spy(() => Promise.resolve(new Response()));
  globalThis.fetch = fetchSpy;
  const mockAuth: ProxyAuthPayload = {
    proxyUrl: "https://proxy.deskpro.com",
    token: "test-token-123",
    appInstanceId: "app-instance-456",
  };
  const authenticator = spy(() => Promise.resolve(mockAuth));
  const proxy = new Proxy(authenticator);

  const proxyFetch = await proxy.fetch();
  await proxyFetch("https://api.example.com/data");

  assertSpyCall(fetchSpy, 0, {
    args: [
      mockAuth.proxyUrl,
      {
        method: "POST",
        headers: {
          "X-Proxy-Headers": JSON.stringify({}),
          "X-Proxy-Authorization": `Bearer ${mockAuth.token}`,
          "X-Proxy-Url": "https://api.example.com/data",
          "X-Proxy-Method": "GET",
        },
      },
    ],
  });
});

Deno.test("Proxy.fetch preserves the original request body", async () => {
  const fetchSpy = spy(() => Promise.resolve(new Response()));
  globalThis.fetch = fetchSpy;
  const mockAuth: ProxyAuthPayload = {
    proxyUrl: "https://proxy.deskpro.com",
    token: "test-token-123",
    appInstanceId: "app-instance-456",
  };
  const authenticator = spy(() => Promise.resolve(mockAuth));
  const proxy = new Proxy(authenticator);
  const testBody = JSON.stringify({ key: "value" });

  const proxyFetch = await proxy.fetch();
  await proxyFetch("https://api.example.com/data", {
    method: "POST",
    body: testBody,
  });

  assertSpyCall(fetchSpy, 0, {
    args: [
      mockAuth.proxyUrl,
      {
        method: "POST",
        body: testBody,
        headers: {
          "X-Proxy-Headers": JSON.stringify({}),
          "X-Proxy-Authorization": `Bearer ${mockAuth.token}`,
          "X-Proxy-Url": "https://api.example.com/data",
          "X-Proxy-Method": "POST",
        },
      },
    ],
  });
});
