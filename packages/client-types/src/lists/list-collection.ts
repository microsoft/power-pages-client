import type { IList } from "./list.js";

/** Classic and modern lists on the current page. */
export interface IListCollection {
  /** Returns all lists. */
  getAll(): IList[];
  /** Finds a list by identifier; returns undefined if absent. */
  getListById(id: string): IList | undefined;
}
