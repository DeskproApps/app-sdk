import type { DeskproClient } from "@/client/client.ts";
import rootProxyFetch from "@/proxy/root.ts";

export default async function adminProxyFetch(
  client: DeskproClient,
) {
  return await rootProxyFetch(client, "getAdminGenericProxyAuth");
}
