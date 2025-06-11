// deno-lint-ignore-file no-explicit-any
import OAuth from "@/client/OAuth.ts";
import { OAuth2Error } from "@/client/types.ts";
import { assertRejects } from "@std/assert";

Deno.test("OAuth.startGlobal handles timeout", async () => {
  const mockMethods = {
    startOAuth2GlobalFlow: () =>
      Promise.resolve({
        state: "test-state",
        authorizationUrl: "https://auth.global.test",
      }),
    pollOAuth2Flow: () => Promise.resolve({ status: "Pending" }),
  };
  const oauth = new OAuth(mockMethods as any);

  const result = await oauth.startGlobal("test-client-id", {
    timeout: 100,
    pollInterval: 50,
  });

  await assertRejects(
    () => result.poll(),
    OAuth2Error,
    "Acquisition timeout",
  );
});
