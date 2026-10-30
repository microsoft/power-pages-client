# @microsoft/power-pages-client-types

Type declarations for the Power Pages Client. This package contains no JavaScript
implementation, constructors, or runtime helpers.

## Named types

After publication, install the package as a development dependency:

```powershell
npm install --save-dev @microsoft/power-pages-client-types
```

In TypeScript, use type-only imports:

```typescript
import type { PagesClient, IFileControl } from "@microsoft/power-pages-client-types";
```

In JavaScript, use JSDoc:

```javascript
/** @param {import("@microsoft/power-pages-client-types").PagesClient} client */
function customizePage(client) {
  const form = client.currentPage.forms.getFormByName("Contact");
  form?.tabs[0].setVisible(true);
}
```

Obtain the actual client from the site's supported initialization mechanism.
Types do not initialize the site or enable the feature.

## Browser globals

The root entry does not declare Power Pages globals. Opt in using a site
`jsconfig.json` or an existing equivalent project configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "checkJs": false,
    "types": ["@microsoft/power-pages-client-types/globals"]
  },
  "include": ["**/*.js"]
}
```

Alternatively, a TypeScript project can load the entry without a runtime import:

```typescript
import type {} from "@microsoft/power-pages-client-types/globals";
```

With the globals entry loaded, callback parameters and promise results are
inferred without JSDoc annotations:

```javascript
window.Microsoft.PowerPages.onPagesClientApiReady((client) => {
  client.currentPage?.forms.getFormByName("Contact")?.setVisible(true);
});

const client = await window.Microsoft.PowerPages.onPagesClientApiReady();
client.languages?.getActive();
```

Both patterns return `Promise<Partial<PagesClient>>`. Readiness only checks that
`window.$pages` exists; it does not guarantee that Client features are enabled.
The callback runs immediately if the object already exists. Its return value is
ignored, and synchronous callback errors are logged without rejecting the
readiness promise. Returned promises from async callbacks are not awaited.
If the object remains unavailable, the helper rejects after 10 seconds.
The deprecated `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias has the
same signature; use `Microsoft.PowerPages.onPagesClientApiReady` for new code.
The existing runtime function name retains `Api` for compatibility.

The declarations model `$pages` and `window.$pages` as potentially unavailable,
with optional client members when the feature is disabled:

```javascript
if (window.$pages?.currentPage) {
  const list = window.$pages.currentPage.lists.getListById("accounts");
  list?.setVisible(true);
}
```

Publishing or installing the package alone does not configure the Power Platform
VS Code extension. The extension must arrange for these declarations to be loaded.

## Specialized forms and controls

Collections expose the shared `IForm` and `IControl` contracts. After verifying
the actual runtime object, explicitly annotate or assert the specialized type:

```javascript
/** @param {import("@microsoft/power-pages-client-types").PagesClient} client */
function clearAttachment(client) {
  const form = client.currentPage.forms.getFormByName("Contact");
  const control = form?.getControlByLogicalName("new_attachment");
  if (control && control.getType() === "File") {
    const file =
      /** @type {import("@microsoft/power-pages-client-types").IFileControl} */ (control);
    file.removeFile();
  }
}
```

`getType()` comparisons and `isMultiStep` checks do not automatically narrow the
shared interfaces. No runtime type guards or constructors are provided.
Existing `isReadOnly`, `isReadonly`, and `readOnly` spellings are preserved.

Multi-step button properties use jQuery 3.x types, supplied by the package's public
`@types/jquery` dependency. The jQuery runtime is not installed by this package.

## Lists and data

List event names infer their public payload, including row methods:

```javascript
list.on("cellclick", (event) => {
  event.row.getCell(event.columnName).setStyle({ fontWeight: "bold" });
});
```

Classic lists return empty row/column arrays and do not dispatch modern-list
events. Presentation overrides do not change the stored record data.

Web API record results retain the existing `unknown` contract. Customer-specific
Dataverse schema inference is not provided. AJAX requests retain their existing
`request<TBody, TData>` generic order. `AjaxError` is an instance type only:
it cannot be constructed or used with `instanceof` from this package, and it does
not automatically type promise rejection or catch variables.

## Copilot Studio agents

`agent` is optional and may be unavailable, including inside
`onPagesClientApiReady`:

```javascript
window.$pages?.agent?.SendActivity(
  "cr123_agentschema",
  { text: "Hello!" },
  (response) => console.log(response.text),
  (error) => console.error(error.message),
);
```

`SendActivity` returns nothing; responses and errors arrive through the callbacks.

## Development

From this directory:

```powershell
npm ci
npm run typecheck
npm test
npm pack --dry-run
```

Tests compile TypeScript, ES module type consumers, and checked JavaScript against
the generated package entries. A separate consumer verifies that named imports do
not load the optional Power Pages globals. No browser runtime is executed.

## License

This package is licensed under the [MIT License](LICENSE.txt).
