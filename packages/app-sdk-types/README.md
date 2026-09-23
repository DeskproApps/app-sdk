# @deskpro/app-sdk-types

The types for the contract between Deskpro and apps built with [`@deskpro/app-sdk`](https://www.npmjs.com/package/@deskpro/app-sdk): contexts, target actions, app elements, state options and UI messages.

It has no dependencies and ships no JavaScript, so a host (such as the Deskpro agent UI) can type its side of the contract without installing the SDK and its React tree. `@deskpro/app-sdk` re-exports everything here, so apps keep importing from the SDK.

```ts
import type { AppElement, DeskproUIMessage } from "@deskpro/app-sdk-types";
```

Both packages are published together from this repository and share a version number.
