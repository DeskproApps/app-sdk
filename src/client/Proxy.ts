import type { ProxyAuthPayload } from "@/client/types.ts";

/**
 * Proxy requests through the Deskpro instance.
 *
 *  * @example
 * ```typescript
 * import { createClient } from "@deskpro/app-sdk";
 *
 * const client = createClient()
 *
 * client.run().then(() => {
 *   // Example usage of Proxy
 *   client.proxy("agent").fetch().then((fetch) => {
 *     fetch("https://api.example.com/data").then((response) => {
 *       return response.json();
 *     }).then((data) => {
 *       console.log(data);
 *     });
 *  });
 * });
 * ```
 */
export default class Proxy {
  constructor(
    private authenticator: () => Promise<ProxyAuthPayload>,
  ) {}

  /**
   * @returns A fetch-like function that can be used to proxy requests through the Deskpro instance.
   */
  public async fetch(): Promise<
    (input: RequestInfo, init?: RequestInit) => Promise<Response>
  > {
    const { proxyUrl, token } = await this.authenticator();

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
}
