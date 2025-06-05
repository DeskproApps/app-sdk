import type Client from "@/client/Client.ts";
import rootProxyFetch from "@/proxy/root.ts";

export default async function agentProxyFetch<Settings extends object>(
  client: Client<Settings>,
): Promise<(input: RequestInfo, init?: RequestInit) => Promise<Response>> {
  return await rootProxyFetch(client, "getProxyAuth");
}
