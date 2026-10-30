/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IForm } from "./form.js";

/** Forms on the current page. Multi-step-specific members require an explicit annotation. */
export interface IFormCollection {
  /** Finds a form by identifier; returns undefined if absent. */
  getFormById(id: string): IForm | undefined;
  /** Finds a form by configured name; returns undefined if absent. */
  getFormByName(name: string): IForm | undefined;
  /** Returns all basic and multi-step forms on the page. */
  getAll(): IForm[];
}
