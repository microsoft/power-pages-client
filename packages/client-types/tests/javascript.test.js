// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @param {import("@microsoft/power-pages-client-types").PagesClient} client */
function useClient(client) {
  const form = client.currentPage.forms.getFormById("contact-form");
  if (form) {
    form.tabs[0].getVisible();
    form.tabs[0].sections[0].setVisible(false);
    const control = form.getControlByLogicalName("new_attachment");
    if (control && control.getType() === "File") {
      const fileControl =
        /** @type {import("@microsoft/power-pages-client-types").IFileControl} */ (control);
      fileControl.removeFile();
      // @ts-expect-error JSDoc specialized contracts also validate setter inputs.
      fileControl.setValue("not-a-file");
    }
  }

  const list = client.currentPage.lists.getListById("accounts");
  list?.on("cellclick", (event) => {
    event.row.getCell(event.columnName).setDisplayText("Selected");
    // @ts-expect-error Cell-click payloads do not expose loaded-event rows.
    event.rows;
  });

  return client.ajax.request({ url: "/_api/example" }).then((response) => response.status);
}

window.$pages?.currentPage?.lists.getAll();
$pages?.languages?.getActive();
window.Microsoft.PowerPages.onPagesClientApiReady((client) => {
  client.currentPage?.forms.getAll();
  // @ts-expect-error Callback parameters are contextually typed without JSDoc.
  client.missing;
  // @ts-expect-error Readiness alone does not enable Client features.
  client.currentPage.forms.getAll();
});
window.Microsoft.PowerPages.onPagesClientApiReady().then((client) => {
  client.user?.signIn();
  // @ts-expect-error Promise results retain the client contract.
  client.missing;
});
window.Microsoft.Dynamic365.Portal.onPagesClientApiReady((client) => {
  client.languages?.getActive();
  // @ts-expect-error The deprecated entry point has the same callback contract.
  client.missing;
});
window.Microsoft.PowerPages.onPagesClientApiReady(($pages) => {
  $pages.agent?.SendActivity(
    "cr123_agent",
    { text: "Hello!" },
    (response) => {
      response.text?.toUpperCase();
      // @ts-expect-error Responses are typed agent activities.
      response.missing;
    },
    (agentError) => agentError.message,
  );
  // @ts-expect-error Agent availability is not guaranteed when the client is ready.
  $pages.agent.SendActivity("cr123_agent", { text: "Hello!" }, () => {}, () => {});
});
// @ts-expect-error Global APIs may not be initialized or enabled.
window.$pages.user.signIn();
