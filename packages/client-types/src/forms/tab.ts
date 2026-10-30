/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IPageElement } from "../common/page-element.js";
import type { ISection } from "./section.js";

/** A form tab containing sections. */
export interface ITab extends IPageElement {
  readonly sections: ISection[];
  /** Returns the tab name. */
  getName(): string | undefined;
}
