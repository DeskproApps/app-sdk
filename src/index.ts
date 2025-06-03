export * from "@/client/types.ts";
export { createClient, default as DeskproClient } from "./client/Client.ts";
export { default as agentProxyFetch } from "@/proxy/admin.ts";
export { default as adminProxyFetch } from "@/proxy/agent.ts";
