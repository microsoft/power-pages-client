// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  AjaxError,
  AjaxResponse,
  DropdownLookupControlValue,
  IControl,
  IDropdownLookupControl,
  IFileControl,
  IModalLookupControl,
  IMoneyControl,
  IMultipleChoiceControl,
  IMultiSelectPicklistControl,
  IMultiStepForm,
  IPicklistControl,
  IRow,
  ListEventHandler,
  PagesClient,
  RowPrivileges,
  RowState,
  RowValue,
} from "@microsoft/power-pages-client-types";
import type {} from "@microsoft/power-pages-client-types/globals";

declare const client: PagesClient;
declare const fileControl: IFileControl;
declare const dropdown: IDropdownLookupControl;
declare const modal: IModalLookupControl;
declare const checkbox: IMultipleChoiceControl;
declare const multiSelect: IMultiSelectPicklistControl;
declare const multiStep: IMultiStepForm;
declare const picklist: IPicklistControl;
declare const money: IMoneyControl;
declare const error: AjaxError;

const form = client.currentPage.forms.getFormByName("Contact");
if (form) {
  const name: string | undefined = form.name;
  const isMultiStep: boolean = form.isMultiStep;
  form.tabs[0].setVisible(false);
  form.tabs[0].sections[0].getHtmlElement().focus();
  form.getControlByLogicalName("fullname")?.setRequired(true, "Enter a name.");
  // @ts-expect-error Base forms do not automatically expose multi-step navigation.
  form.goToNextStep();
  // @ts-expect-error Collection properties are read-only.
  form.controls = [];
}

multiStep.nextButton.on("click", (event) => {
  event.preventDefault();
});
if (multiStep.hasNextStep()) multiStep.goToNextStep();

const baseControl: IControl = fileControl;
const selectedFile: File | undefined = fileControl.getValue();
fileControl.setValue(new File(["content"], "sample.txt"));
fileControl.removeFile();
// @ts-expect-error File-specific setter rejects strings.
fileControl.setValue("sample.txt");
// @ts-expect-error Undeclared fields are not part of the public contract.
fileControl.unknownProperty;

const selectedLookup: DropdownLookupControlValue | undefined = dropdown.getValue();
dropdown.setValue("record-id");
// @ts-expect-error Dropdown setters accept an ID, not their returned object shape.
dropdown.setValue({ id: "record-id", name: "Account" });
modal.setValue({ id: "record-id", name: "Account", entityType: "account" });
modal.clearValue();
// @ts-expect-error Modal lookups require an entity type.
modal.setValue({ id: "record-id", name: "Account" });
checkbox.setValue(true);
multiSelect.setValue([100000000, 100000001]);
// @ts-expect-error A checkbox does not accept a string representation.
checkbox.setValue("true");
// @ts-expect-error Multi-select option values are numbers.
multiSelect.setValue(["100000000"]);
picklist.subType = "Dropdown";
// @ts-expect-error Picklist subtypes are a closed set of strings.
picklist.subType = "Unknown";
money.readOnly;
// @ts-expect-error Preserve the runtime's existing property spelling.
money.isReadOnly;

const list = client.currentPage.lists.getListById("accounts");
if (list) {
  list.setVisible(true);
  list.getColumn("name")?.setTooltip("Account name");
  list.on("loaded", (event) => {
    const row: IRow = event.rows[0];
    const raw: RowValue = row.getValue("name");
    const privileges: RowPrivileges | undefined = row.getPrivileges();
    const state: RowState | undefined = row.getState();
    row.getCell("name").setDisplayText("Contoso");
    // @ts-expect-error Rows do not expose undeclared fields.
    row.unknownProperty;
    // @ts-expect-error Loaded events provide rows, not a single row.
    event.row;
  });
  const onCellClick: ListEventHandler<"cellclick"> = (event) => {
    event.row.getCell(event.columnName).setStyle({ fontWeight: "bold" });
    event.event.preventDefault();
  };
  list.on("cellclick", onCellClick);
  list.off("cellclick", onCellClick);
  list.on("rowclick", (event) => {
    event.row.getId();
    // @ts-expect-error Row-click events do not identify a column.
    event.columnName;
  });
  // @ts-expect-error Only the three documented event names are supported.
  list.on("change", () => {});
}

const response: Promise<AjaxResponse<{ id: string }>> =
  client.ajax.request<{ name: string }, { id: string }>({
    method: "POST",
    url: "/_api/serverlogics/create",
    body: { name: "Contoso" },
    signal: new AbortController().signal,
  });
response.then((result) => {
  const id: string = result.data.id;
  // @ts-expect-error Generic response data must retain its declared shape.
  result.data.missing;
});
// @ts-expect-error TRACE is not a supported method.
client.ajax.request({ url: "/_api/example", method: "TRACE" });
const download: Promise<Blob> =
  client.webAPI.downloadFileFromColumn("accounts", "record-id", "entityimage", { size: "thumbnail" });
// @ts-expect-error Download sizes are full or thumbnail.
client.webAPI.downloadFileFromColumn("accounts", "record-id", "entityimage", { size: "small" });
client.webAPI.retrieveRecord("accounts", "record-id").then((record) => {
  // @ts-expect-error Existing Web API results do not infer a table-specific schema.
  record.name;
});
const status: number = error.status;
// @ts-expect-error Error metadata is readonly.
error.status = 400;
// @ts-expect-error This package exports an error type, not a constructor.
new AjaxError("failure", 400, null);
// @ts-expect-error The package does not provide control constructors.
new IFileControl();

client.agent?.SendActivity(
  "cr123_agent",
  { name: "AgentEvent", value: { key1: "value1" } },
  (response) => {
    const text: string | undefined = response.text;
    const conversationId: string = response.conversation.id;
  },
  (agentError) => {
    const message: string = agentError.message;
  },
);
// @ts-expect-error Agent availability is not guaranteed when the client is ready.
client.agent.SendActivity("cr123_agent", { text: "Hello!" }, () => {}, () => {});
// @ts-expect-error Activities are objects, not message strings.
client.agent?.SendActivity("cr123_agent", "Hello!", () => {}, () => {});

window.$pages?.currentPage?.forms.getAll();
$pages?.webAPI?.getRecordCount("accounts");
const ready: Promise<Partial<PagesClient>> =
  window.Microsoft.PowerPages.onPagesClientApiReady((readyClient) => {
    readyClient.currentPage?.forms.getAll();
    // @ts-expect-error Readiness does not guarantee feature availability.
    readyClient.currentPage.forms.getAll();
    // @ts-expect-error The callback receives the client, not an arbitrary value.
    readyClient.missing;
    return "ignored";
  });
ready.then((readyClient) => {
  readyClient.webAPI?.getRecordCount("accounts");
});
const withoutCallback: Promise<Partial<PagesClient>> =
  Microsoft.PowerPages.onPagesClientApiReady();
const legacyReady: Promise<Partial<PagesClient>> =
  window.Microsoft.Dynamic365.Portal.onPagesClientApiReady((readyClient) => {
    readyClient.languages?.getActive();
    // @ts-expect-error Deprecated aliases retain contextual callback typing.
    readyClient.missing;
  });
// @ts-expect-error The promise resolves with the client, not the callback result.
const callbackResult: Promise<number> =
  Microsoft.PowerPages.onPagesClientApiReady(() => 123);
// @ts-expect-error Invalid callback arguments are not part of the supported contract.
Microsoft.PowerPages.onPagesClientApiReady("callback");
// @ts-expect-error Global initialization and feature availability are not guaranteed.
window.$pages.currentPage.forms.getAll();
// @ts-expect-error Undeclared methods are not part of the public contract.
client.unknownMethod();
