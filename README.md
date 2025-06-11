# Deskpro Apps SDK

Deskpro Apps SDK provides a client for communicating with the Deskpro system,
React UI components as well as basic styles and utilities for use in simple apps
and widgets.

## Installation

Install the SDK via `deno`, `pnpm` or `npm`:

```bash
## deno
deno add jsr:@deskpro/app-sdk # Using jsr.io
## pnpm
pnpm add jsr:@deskpro/app-sdk # Using jsr.io
pnpm add @deskpro/app-sdk     # using npmjs.com
## npm
npm install @deskpro/app-sdk  # Using npmjs.com
```

## Basic Usage

When communicating with the Deskpro system, an app or widget must register
`listeners` for key events:

- `ready` - when an app is loaded, but is not necessarily shown to the user
- `show` - the app has been revealed to the user
- `change` - the data (context) being passed to the app from Deskpro has changed

To register a listener you'll need to first import and create a Deskpro client,
register the listener(s) and then lastly run the client:

```javascript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

client.subscribe("ready", (context) => {
  // do something when the app is ready
});

client.subscribe("show", (context) => {
  // do something when the app is shown to the user
});

client.subscribe("change", (context) => {
  // do something when the "context" data has changed
});

client.run();
```

To make `fetch` requests via the
[app proxy](https://support.deskpro.com/en-US/guides/developers/app-proxy), and
therefore gain access to
[app settings](https://support.deskpro.com/en-GB/guides/developers/app-settings),
we've provided a utility that wraps the native `fetch` function in the browser:

```typescript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

client.run().then(() => {
  // Example usage of Proxy
  client.proxy("agent").fetch().then((fetch) => {
    fetch("https://api.example.com/data?api_key=__apikey_").then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    });
  });
});
```

Notice that
[the proxy will replace placeholders](https://support.deskpro.com/en-US/guides/developers/app-proxy#setting_injection)
with the format `__<setting>__`. In this example, `__apikey__` will be replaced
with the app backend setting `apikey`. Proxy setting placeholders may be placed
in the URL, headers or body of the request.

You can also control aspects of Deskpro itself, like the app title and icon
badge count. To do this, use the client again to set these properties:

```typescript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

client.run().then(() => {
  client.ui().setTitle("My New Title");
  client.ui().setBadgeCount(42);
});
```

## UI Components

The Apps SDK doesn't export any UI elements but for consistency, we recommended
you use
[Deskpro UI](https://github.com/deskpro/deskpro-product/tree/master/packages/deskpro-ui)
for consistency.

## Developer Area

### Tests

```bash
deno test
deno test --coverage # or with coverage
```

### Lints

```bash
deno lint
```

### Formatting

```bash
deno fmt
```

### All in One

_This is recommended before
[opening a Pull Request](https://github.com/DeskproApps/app-sdk/compare)._

```bash
deno task check
```

### Build

This takes two arguments, `--version` which is the existing published version
and `--milestone` which is the type of increment you wish to create, e.g.
`major`, `minor`, or `patch`.

```bash
deno task build --version 0.0.0 --milestone minor
```

### Publish

This should not be done outside of the Github actions. Publishing occurs
automatically upon pushes to `main`.
