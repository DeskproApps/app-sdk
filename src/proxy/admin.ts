import type Client from "@/client/Client.ts";
import rootProxyFetch from "@/proxy/root.ts";

export default async function adminProxyFetch(
  client: Client,
): Promise<(input: RequestInfo, init?: RequestInit) => Promise<Response>> {
  return await rootProxyFetch(client, "getAdminGenericProxyAuth");
}
