import type Client from "@/client/Client.ts";

export default async function rootProxyFetch(
  client: Client,
  clientMethod: "getAdminGenericProxyAuth" | "getProxyAuth",
): Promise<(input: RequestInfo, init?: RequestInit) => Promise<Response>> {
  if (typeof client[clientMethod] !== "function") {
    throw new Error(`
      Deskpro getProxyAuth() is undefined, please make sure that the run() method is called
      on the Deskpro client after the page is loaded
    `);
  }

  const { proxyUrl, token } = await client[clientMethod]();

  return (input: RequestInfo, init?: RequestInit) =>
    fetch(proxyUrl, {
      ...init,
      method: "POST",
      headers: {
        "X-Proxy-Headers": JSON.stringify(init?.headers ?? {}),
        "X-Proxy-Authorization": `Bearer ${token}`,
        "X-Proxy-Url": typeof input === "string" ? input : input.url,
        "X-Proxy-Method": typeof input === "string"
          ? (init?.method ?? "GET")
          : input.method,
      },
    });
}
