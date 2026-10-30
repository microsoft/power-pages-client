<!-- Copyright (c) Microsoft Corporation.
Licensed under the MIT License. -->

# Power Pages Client

Power Pages Client provides public type definitions for the
Microsoft Power Pages Client, enabling TypeScript type checking and JavaScript
IntelliSense for developers customizing Power Pages websites.

The types package is `@microsoft/power-pages-client-types`, covering
forms, controls, lists, user actions, languages, Web API operations, and AJAX
requests, plus Copilot Studio agent messaging. The Power Pages platform supplies the runtime implementation; type
definitions do not initialize the client or enable platform features.

See the [package README](packages/client-types/README.md) for usage and
compatibility limitations, and the
[Power Pages documentation](https://learn.microsoft.com/power-pages/) for product information.

## Structure

```text
packages\
  client-types\
    src\               Public type declarations
    tests\             Compile-time consumer tests
    package.json
    package-lock.json
    tsconfig.json
    tsconfig.tests.json
```

## Local development

Install Node.js with npm, then run these commands from the repository root:

```powershell
Set-Location packages\client-types
npm ci
npm run typecheck
npm test
npm pack --dry-run
```

The package owns its tooling and TypeScript configuration; npm workspaces are not
configured. Run dependency commands in the package directory, not the repository
root, and keep the regenerated `package-lock.json` tracked.

The build emits declaration files only into `packages\client-types\dist`.
Tests check TypeScript, ES module, and JavaScript/JSDoc consumers without
executing the Power Pages runtime. Dependencies and generated outputs are
excluded from version control.

## Third-party code and assets

Third-party packages are installed through npm, not vendored: `@types/jquery`
provides jQuery declarations, and TypeScript provides build tooling. The jQuery
runtime and third-party fonts, images, or models are not bundled. See the package
manifest and lockfile for dependencies and versions.

## Contributing

This project is not currently accepting contributions. See
[CONTRIBUTING.md](CONTRIBUTING.md) for details.

This project has adopted the
[Microsoft Open Source Code of Conduct](CODE_OF_CONDUCT.md).

## Security and support

For security reporting instructions, see [SECURITY.md](SECURITY.md).
Do not report security vulnerabilities through public GitHub issues.

For questions, bugs, and feature requests, see [SUPPORT.md](SUPPORT.md).

## License

This project is licensed under the [MIT License](LICENSE.txt).

## Trademarks

This project may contain trademarks or logos for projects, products, or services.
Authorized use of Microsoft trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks).
Use of Microsoft trademarks or logos in modified versions of this project must
not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
