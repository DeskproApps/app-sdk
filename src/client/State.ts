import type {
  GetStateResponse,
  SetStateResponse,
  StateOptions,
} from "@/client/types.ts";

/**
 * Class to handle state management.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/apps/apps-1/app-state
 */
export default class State {
  constructor(
    private methods: {
      setState: <T>(
        name: string,
        value: T,
        options?: StateOptions,
      ) => Promise<SetStateResponse>;
      getState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
      deleteState: (name: string) => Promise<boolean>;
      hasState: (name: string) => Promise<boolean>;
    },
  ) {}

  public setState<T>(
    name: string,
    value: T,
    options?: StateOptions,
  ): Promise<SetStateResponse> {
    return this.methods.setState<T>(name, value, options);
  }

  public getState<T>(name: string): Promise<GetStateResponse<T>[]> {
    return this.methods.getState<T>(name);
  }

  public deleteState(name: string): Promise<boolean> {
    return this.methods.deleteState(name);
  }

  public hasState(name: string): Promise<boolean> {
    return this.methods.hasState(name);
  }
}
