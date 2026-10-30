/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/** Value of a composite address field. */
export interface IAddressCompositeControlValue {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

/** Value of a composite full-name field. */
export interface IFullNameControlValue {
  firstName: string;
  middleName: string;
  lastName: string;
}

/** Selected dropdown-lookup option. The setter accepts its ID, not this object. */
export interface DropdownLookupControlValue {
  id: string;
  name: string;
}

/** Selected modal-lookup record. */
export interface ModalLookupControlValue {
  id: string;
  name: string;
  entityType: string;
}
