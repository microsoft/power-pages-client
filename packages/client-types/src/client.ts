/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IAgent } from "./agent.js";
import type { IAjax } from "./ajax.js";
import type { ILanguages } from "./languages.js";
import type { Page } from "./page.js";
import type { IUser } from "./user.js";
import type { IWebAPI } from "./web-api.js";

/** The initialized Power Pages Client when the client feature is enabled. */
export interface PagesClient {
  /** Forms and lists on the current page. */
  currentPage: Page;
  /** Sign-in and sign-out actions. */
  user: IUser;
  /** Operations on Dataverse records and file/image columns. */
  webAPI: IWebAPI;
  /** Website language selection. */
  languages: ILanguages;
  /** HTTP requests with Power Pages session and CSRF handling. */
  ajax: IAjax;
  /**
   * Copilot Studio agent messaging. Availability is not guaranteed,
   * including in onPagesClientApiReady.
   */
  agent?: IAgent;
}
