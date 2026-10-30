/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Date/time field using the field's configured display format. */
export interface IDateTimeControl extends IControl {
  isReadOnly: boolean;
  isDisabled: boolean;
  dataType: string;
  getType(): string;
  getValue(): string;
  /** Sets a formatted date/time string; throws if read-only, disabled, or invalid. */
  setValue(value: string): void;
}
