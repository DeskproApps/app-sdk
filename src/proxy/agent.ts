import { DeskproClient } from "@/client/client.ts";
import rootProxyFetch from "@/proxy/root.ts";

export default async function agentProxyFetch(
  client: DeskproClient,
) {
  return await rootProxyFetch(client, "getProxyAuth");
}
