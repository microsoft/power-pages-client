/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { ICell } from "./cell.js";
import type { RowPrivileges, RowState, RowValue } from "./row-types.js";

/** Modern-list row data and presentation-only overrides. */
export interface IRow {
  /** Returns the Dataverse record identifier. */
  getId(): string;
  /** Returns the raw value, or null if the column is absent. */
  getValue(logicalName: string): RowValue;
  /** Returns the formatted value, or an empty string if the column is absent. */
  getDisplayValue(logicalName: string): string;
  getPrivileges(): RowPrivileges | undefined;
  getState(): RowState | undefined;
  /** Merges inline CSS; successive calls accumulate. */
  setStyle(style: Record<string, string>): void;
  /** Replaces CSS class names with the supplied space-separated set. */
  setClassName(className: string): void;
  addClassName(className: string): void;
  removeClassName(className: string): void;
  /** Shows or hides the row without changing its underlying data. */
  setVisible(visible: boolean): void;
  /** Returns a presentation-only cell write handle. */
  getCell(logicalName: string): ICell;
}
