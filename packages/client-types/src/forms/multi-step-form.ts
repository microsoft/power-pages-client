/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/// <reference types="jquery" preserve="true" />

import type { IForm } from "./form.js";

/** A multi-step form, with navigation for its current step. */
export interface IMultiStepForm extends IForm {
  /** Next-step button; the jQuery collection may be empty. */
  nextButton: JQuery<HTMLElement>;
  /** Previous-step button; the jQuery collection may be empty. */
  previousButton: JQuery<HTMLElement>;
  /** Whether a visible next-step button is available. */
  hasNextStep(): boolean;
  /** Whether a visible previous-step button is available. */
  hasPreviousStep(): boolean;
  /** Clicks the next-step button. Throws if no next step is available. */
  goToNextStep(): void;
  /** Clicks the previous-step button. Throws if no previous step is available. */
  goToPreviousStep(): void;
}
