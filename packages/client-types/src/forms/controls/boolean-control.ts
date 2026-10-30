/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Boolean radio field. Values are option strings, not JavaScript booleans. */
export interface IBooleanControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
