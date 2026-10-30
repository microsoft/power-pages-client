/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { IRow } from "./row.js";

/** Events available on modern lists. Classic lists do not dispatch these events. */
export type ListEventName = "loaded" | "rowclick" | "cellclick";

/** Rows published after a fetch, including refreshes and paging. */
export interface ListLoadedEvent {
  rows: IRow[];
}

/** Clicked row and originating browser event. */
export interface ListRowClickEvent {
  row: IRow;
  event: MouseEvent;
}

/** Clicked cell's row, logical column name, and originating browser event. */
export interface ListCellClickEvent {
  row: IRow;
  columnName: string;
  event: MouseEvent;
}

/** Payload inferred from the subscribed event name. */
export type ListEventArgs<E extends ListEventName> = E extends "loaded"
  ? ListLoadedEvent
  : E extends "rowclick"
    ? ListRowClickEvent
    : E extends "cellclick"
      ? ListCellClickEvent
      : never;

/** Handler for one list event. Retain the same function reference for off. */
export type ListEventHandler<E extends ListEventName> = (args: ListEventArgs<E>) => void;
