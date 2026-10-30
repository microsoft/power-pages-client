import type { IPageElement } from "../common/page-element.js";
import type { IColumn } from "./column.js";
import type { ListEventHandler, ListEventName } from "./list-events.js";
import type { IRow } from "./row.js";

/** A classic or modern list. Modern-only data/event operations are safe no-ops on classic lists. */
export interface IList extends IPageElement {
  id: string;
  isModern: boolean;
  /** Latest grid rows; empty for classic lists. Read inside a loaded handler. */
  readonly rows: IRow[];
  /** Current view columns; empty for classic lists. */
  readonly columns: IColumn[];
  /** Finds a column; returns undefined if absent or this is a classic list. */
  getColumn(logicalName: string): IColumn | undefined;
  /** Subscribes a handler. Repeating the same event/handler pair is a no-op. */
  on<E extends ListEventName>(event: E, handler: ListEventHandler<E>): void;
  /** Unsubscribes using the same function reference passed to on. */
  off<E extends ListEventName>(event: E, handler: ListEventHandler<E>): void;
}
