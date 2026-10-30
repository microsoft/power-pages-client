/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IControl } from "./control.js";

/** Duration, language, or timezone selection represented as a string. */
export interface IFormattedIntegerControl extends IControl {
  isReadOnly: boolean;
  getType(): string;
  getValue(): string | undefined;
  setValue(value: string): void;
}
