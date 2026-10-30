/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Floating-point field represented as a string. */
export interface IDoubleControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
