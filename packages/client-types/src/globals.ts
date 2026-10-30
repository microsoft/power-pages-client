/*! Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License. */

import type { PagesClient } from "./client.js";

declare global {
  namespace Microsoft {
    namespace PowerPages {
      /**
       * Waits for window.$pages and resolves with that object.
       * Client members may be absent when the feature is disabled.
       * The callback runs immediately if window.$pages already exists.
       * Callback results are ignored; synchronous errors are logged without rejecting.
       * Rejects after 10 seconds if window.$pages is still unavailable.
       */
      function onPagesClientApiReady(
        callback?: (client: Partial<PagesClient>) => void,
      ): Promise<Partial<PagesClient>>;
    }

    namespace Dynamic365 {
      namespace Portal {
        /** @deprecated Use Microsoft.PowerPages.onPagesClientApiReady instead. */
        function onPagesClientApiReady(
          callback?: (client: Partial<PagesClient>) => void,
        ): Promise<Partial<PagesClient>>;
      }
    }
  }

  interface Window {
    Microsoft: typeof Microsoft;

    /** Unavailable before initialization; client members may be absent when disabled. */
    $pages?: Partial<PagesClient>;
  }

  /** Unavailable before initialization; client members may be absent when disabled. */
  var $pages: Partial<PagesClient> | undefined;
}

export {};
