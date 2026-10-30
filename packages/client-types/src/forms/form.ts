import type { IPageElement } from "../common/page-element.js";
import type { IControl } from "./controls/control.js";
import type { ITab } from "./tab.js";

/** A basic form or the shared surface of a multi-step form. */
export interface IForm extends IPageElement {
  /** Form identifier, when present in the page markup. */
  id?: string;
  /** Configured form name, when present in the page markup. */
  name?: string;
  /** Whether this instance represents a multi-step form. Does not narrow its type. */
  isMultiStep: boolean;
  /** Controls on the form, or in the current multi-step-form step. */
  readonly controls: IControl[];
  /** Tabs on the form. */
  readonly tabs: ITab[];
  /** Finds a control by its Dataverse logical name; returns undefined if absent. */
  getControlByLogicalName(logicalName: string): IControl | undefined;
}
