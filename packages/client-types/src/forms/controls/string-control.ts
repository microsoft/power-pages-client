/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Single-line text field. Setting an overlength value throws. */
export interface IStringControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
