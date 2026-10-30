/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IPageElement } from "../common/page-element.js";
import type { IControl } from "./controls/control.js";

/** A group of controls within a form tab. */
export interface ISection extends IPageElement {
  readonly controls: IControl[];
  /** Returns the section name, when available. */
  getName(): string | undefined;
}
