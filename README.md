# Deskpro Apps SDK

Deskpro Apps SDK provides a client for communicating with the Deskpro system,
React UI components as well as basic styles and utilities for use in simple apps
and widgets.

## Installation

Install the SDK via `deno`, `pnpm` or `npm`:

```bash
pnpm add @deskpro/app-sdk
```

OR

```bash
npm install @deskpro/app-sdk
```

## Basic Usage

When communicating with the Deskpro system, an app or widget must register
"listeners" for key events:

- **onReady** - when an app is loaded, but is not necessarily shown to the user
- **onShow** - the app has been revealed to the user
- **onChange** - the data (context) being passed to the app from Deskpro has
  changed

To register a listener you'll need to first import and create a Deskpro client,
register the listener(s) and then lastly run the client:

```javascript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

client.onReady((context) => {
  // do something when the app is ready
});

client.onShow((context) => {
  // do something when the app is shown to the user
});

client.onChange((context) => {
  // do something when the "context" data has changed
});

client.run();
```

As an aside, it's always best to "run" the client after the page is loaded, the
easiest way to do this is to register the `client.run()` call as a
`window.onload` method:

```javascript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

window.onload = () => client.run();

// ...
```

To make `fetch` requests via the
[app proxy](https://support.deskpro.com/en-US/guides/developers/app-proxy), and
therefore gain access to app settings, we've provided a utility that wraps the
native `fetch` function in the browser:

```javascript
import { createClient, proxyFetch } from "@deskpro/app-sdk";

const client = createClient();

window.onload = () => client.run();

proxyFetch(client).then((dpFetch) => {
  // Use dpFetch() just like you would use fetch() natively.
  dpFetch("https://example.com/api/things?api_key=__key__").then((res) => {
    // ...
  });
});
```

Notice that
[the proxy will replace placeholders](https://support.deskpro.com/en-US/guides/developers/app-proxy#setting_injection)
with the format `__<setting>__`. In this example, `__key__` will be replaced
with the app backend setting `key`. Proxy setting placeholders may be placed in
the URL, headers or body of the request.

You can also control aspects of Deskpro itself, like the app title and icon
badge count. To do this, use the client again to set these properties:

```javascript
import { createClient } from "@deskpro/app-sdk";

const client = createClient();

window.onload = () => client.run();

client.setTitle("My New Title");
client.setBadgeCount(42);
```

## UI Components

The Apps SDK doesn't export any UI elements but for consistency, we recommended
you use
[Deskpro UI](https://github.com/deskpro/deskpro-product/tree/master/packages/deskpro-ui).

## Tests

To run the SDK test suite, execute the following:

```bash
deno test
```
