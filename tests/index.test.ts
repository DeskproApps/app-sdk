import * as Deskpro from "@/index.ts";
import { assert } from "@std/assert";

Deno.test("Exports exist", () => {
  assert(Deskpro.DeskproClient);
  assert(Deskpro.OAuth2Error);
  assert(Deskpro.adminProxyFetch);
  assert(Deskpro.agentProxyFetch);
  assert(Deskpro.createClient);
});
