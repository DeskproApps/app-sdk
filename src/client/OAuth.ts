import {
  type IOAuth2,
  OAuth2Error,
  type OAuth2Result,
  type PollOAuth2FlowResult,
  type PollOAuth2GlobalFlowResult,
  type PollOAuth2LocalFlowResult,
  type StartOAuth2GlobalFlowResult,
  type StartOAuth2LocalFlowResult,
} from "@/client/types.ts";

/**
 * Class to handle OAuth2 flows.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/oauth-flows
 *
 * A local flow is when OAuth2 credentials are provided in the app settings and thus unqiue per customer.
 * A global flow is when OAuth2 credentials are provided in `secrets` and thus shared across all customers.
 *
 * Ideally both flows should be supported by the same OAuth2 provider as this allows the customer to decide if they want an easy flow (global) or a more secure flow (local).
 */
export default class OAuth {
  constructor(
    private methods: {
      startOAuth2LocalFlow: (
        codeAcquisitionPattern: RegExp,
        timeout: number,
      ) => Promise<StartOAuth2LocalFlowResult>;
      startOAuth2GlobalFlow: (
        clientId: string,
        timeout: number,
      ) => Promise<StartOAuth2GlobalFlowResult>;
      pollOAuth2Flow: <T = PollOAuth2FlowResult>(
        state: string,
      ) => Promise<T>;
    },
  ) {}

  public async startLocal(
    authorizeUrlFn: (
      data: { state: string; callbackUrl: string; codeChallenge: string },
    ) => string,
    codeAcquisitionPattern: RegExp,
    convertResponseToToken: (
      code: string,
      codeVerifierProxyPlaceholder: string,
    ) => Promise<OAuth2Result>,
    options?: { timeout?: number; pollInterval?: number },
  ): Promise<IOAuth2> {
    const timeout = options?.timeout ?? (600 * 1000); // 10 minute timeout
    const pollInterval = options?.pollInterval ?? 2000; // 2 second poll interval

    const start = await this.methods.startOAuth2LocalFlow(
      codeAcquisitionPattern,
      timeout,
    );

    // Build our proper authorize URL using downstream implementation.
    const authorizeUrl = authorizeUrlFn({
      state: start.state,
      callbackUrl: start.callbackUrl,
      codeChallenge: start.codeChallenge,
    });

    // Curried poll function that returns the promise that resolves when polling is done... or rejects
    // when polling times out
    const poll = () =>
      new Promise<OAuth2Result>((resolve, reject) => {
        const poller = setInterval(() => {
          this.methods.pollOAuth2Flow<PollOAuth2LocalFlowResult>(start.state)
            .then(
              (pollResult) => {
                if (pollResult && pollResult.status !== "Pending") {
                  clearInterval(poller);
                  if (pollResult.error) {
                    reject(new OAuth2Error(pollResult.error));
                    return;
                  }
                  convertResponseToToken(
                    pollResult.authCode as string,
                    pollResult.codeVerifierProxyPlaceholder,
                  )
                    .then(resolve);
                }
              },
            );
        }, pollInterval);

        setTimeout(() => {
          clearInterval(poller);
          reject(new OAuth2Error("Acquisition timeout"));
        }, timeout);
      });

    return {
      poll,
      authorizationUrl: authorizeUrl,
      stopPolling: clearInterval(pollInterval),
    };
  }

  public async startGlobal(
    clientId: string,
    options?: { timeout?: number; pollInterval?: number },
  ): Promise<IOAuth2> {
    const timeout = options?.timeout ?? (600 * 1000); // 10 minute timeout
    const pollInterval = options?.pollInterval ?? 2000; // 2 second poll interval

    const start = await this.methods.startOAuth2GlobalFlow(
      clientId,
      timeout,
    );

    // Curried poll function that returns the promise that resolves when polling is done... or rejects
    // when polling times out
    const poll = () =>
      new Promise<OAuth2Result>((resolve, reject) => {
        const poller = setInterval(() => {
          this.methods.pollOAuth2Flow<PollOAuth2GlobalFlowResult>(start.state)
            .then(
              (pollResult) => {
                if (pollResult && pollResult.status !== "Pending") {
                  clearInterval(poller);
                  if (pollResult.error) {
                    reject(new OAuth2Error(pollResult.error));
                    return;
                  }
                  resolve({
                    data: pollResult,
                  });
                }
              },
            );
        }, pollInterval);

        setTimeout(() => {
          clearInterval(poller);
          reject(new OAuth2Error("Acquisition timeout"));
        }, timeout);
      });

    return {
      poll,
      authorizationUrl: start.authorizationUrl,
      stopPolling: clearInterval(pollInterval),
    };
  }
}
