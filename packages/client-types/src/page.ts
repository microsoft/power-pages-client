import type { IFormCollection } from "./forms/form-collection.js";
import type { IListCollection } from "./lists/list-collection.js";

/** Forms and lists available on the current page. */
export type Page = {
  forms: IFormCollection;
  lists: IListCollection;
};
