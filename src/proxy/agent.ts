import type Client from "@/client/Client.ts";
import rootProxyFetch from "@/proxy/root.ts";

export default async function agentProxyFetch(
  client: Client,
): Promise<(input: RequestInfo, init?: RequestInit) => Promise<Response>> {
  return await rootProxyFetch(client, "getProxyAuth");
}
