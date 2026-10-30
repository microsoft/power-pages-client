import type { IPageElement } from "../../common/page-element.js";
import type {
  DropdownLookupControlValue,
  IAddressCompositeControlValue,
  IFullNameControlValue,
  ModalLookupControlValue,
} from "./control-values.js";

/** Values returned by the shared control contract. Specialized controls narrow this type. */
export type ControlValue =
  | string
  | boolean
  | number[]
  | IFullNameControlValue
  | IAddressCompositeControlValue
  | ModalLookupControlValue
  | DropdownLookupControlValue
  | File
  | undefined;

/** Inputs accepted across control types, not by every individual control. */
export type ControlSetValue =
  | string
  | boolean
  | number[]
  | IFullNameControlValue
  | IAddressCompositeControlValue
  | ModalLookupControlValue
  | File;

/** Shared form-field operations. Not every control supports setting every value type. */
export interface IControl extends IPageElement {
  /** Returns the field's display name. */
  getName(): string;
  /** Returns the Dataverse logical name, when available. */
  getLogicalName(): string | undefined;
  /** Whether the control is disabled. */
  getDisabled(): boolean;
  /** Enables or disables the control, subject to server-side read-only constraints. */
  setDisabled(isDisabled: boolean): void;
  /** Whether the field is required. */
  getRequired(): boolean;
  /** Sets client-side required validation. Cannot make a server-required field optional. */
  setRequired(isRequired: boolean, errorMessage?: string): void;
  /**
   * Registers or replaces a validator by ID.
   * @typeParam T Must match the control's actual value; it is not checked at runtime.
   * @param evaluationFn Returns true for a valid value. Exceptions fail validation.
   */
  addValidator<T>(id: string, evaluationFn: (value: T) => boolean, errorMessage: string): void;
  /** Removes a custom validator; a missing ID is a no-op. */
  removeValidator(id: string): void;
  /** Removes custom validators, but not the required-field validator. */
  clearValidators(): void;
  /** Runtime control name. Comparing this string does not automatically narrow IControl. */
  getType(): string | undefined;
  /** Returns the current value in the control-specific representation. */
  getValue(): ControlValue;
  /** Sets the value in the control-specific representation. May throw for unsupported inputs. */
  setValue(value: ControlSetValue): void;
}
