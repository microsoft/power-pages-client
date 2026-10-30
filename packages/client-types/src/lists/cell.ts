/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/** Presentation-only write handle for a cell. Read values through the owning row. */
export interface ICell {
  /** Overrides displayed text without changing the underlying record value. */
  setDisplayText(text: string): void;
  /** Merges inline CSS; successive calls accumulate. */
  setStyle(style: Record<string, string>): void;
}
