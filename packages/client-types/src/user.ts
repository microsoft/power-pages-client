/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

/** Authentication navigation actions for the current site. */
export interface IUser {
  /** Redirects to sign-in, preserving the current page as the return URL. */
  signIn(): void;
  /** Redirects to sign-out, preserving the current page as the return URL. */
  signOut(): void;
}
