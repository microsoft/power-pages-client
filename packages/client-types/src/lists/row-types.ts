/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/** A raw row value. Missing columns are reported as null. */
export type RowValue = string | number | boolean | Date | null;

/** Server-evaluated record privileges, for visualization only, not authorization. */
export interface RowPrivileges {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
  canAppend: boolean;
  canAppendTo: boolean;
}

/** Server state and status codes for a record. */
export interface RowState {
  stateCode: number;
  statusCode: number;
}
