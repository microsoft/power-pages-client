import type { IMultiStepForm, PagesClient } from "@microsoft/power-pages-client-types";

declare const client: PagesClient;
declare const form: IMultiStepForm;

client.currentPage.forms.getAll();
form.nextButton.trigger("click");

// @ts-expect-error Importing named types must not opt the project into browser globals.
window.$pages;
// @ts-expect-error Importing named types must not declare the bare Power Pages global.
$pages;
// @ts-expect-error Named types do not declare browser readiness namespaces.
window.Microsoft.PowerPages.onPagesClientApiReady();
// @ts-expect-error Named types do not declare the bare readiness namespace.
Microsoft.PowerPages.onPagesClientApiReady();
// @ts-expect-error There is no runtime constructor export.
import { AjaxError } from "@microsoft/power-pages-client-types";
// @ts-expect-error Runtime symbols are not exported by the declarations package.
import { currentPage } from "@microsoft/power-pages-client-types";
