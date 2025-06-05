import * as Deskpro from "@/index.ts";
import { assert } from "@std/assert";

Deno.test("Library Exports Exist", () => {
  assert(Deskpro.DeskproClient);
  assert(Deskpro.OAuth2Error);
  assert(Deskpro.adminProxyFetch);
  assert(Deskpro.agentProxyFetch);
  assert(Deskpro.createClient);
});
