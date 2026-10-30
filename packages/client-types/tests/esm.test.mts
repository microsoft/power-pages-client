// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { IMultiStepForm, PagesClient } from "@microsoft/power-pages-client-types";

declare const client: PagesClient;
declare const form: IMultiStepForm;

client.currentPage.lists.getListById("accounts")?.getVisible();
form.previousButton.trigger("click");
