/** Supported HTTP verbs. */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** Options for a Power Pages HTTP request. */
export interface AjaxRequestOptions<TBody = unknown> {
  /** Defaults to GET without a body, or POST with a body. */
  method?: HttpMethod;
  /** Relative endpoint path or absolute URL. */
  url: string;
  body?: TBody;
  /** Query parameters appended to the URL. */
  params?: Record<string, string | number | boolean>;
  /** Additional headers; platform-required headers are handled by the runtime. */
  headers?: Record<string, string>;
  /** Cancels the request. Cancellation errors are not wrapped as AjaxError. */
  signal?: AbortSignal;
}

/** Successful HTTP response, independent of the runtime's HTTP implementation. */
export interface AjaxResponse<TData = unknown> {
  data: TData;
  status: number;
  ok: boolean;
  headers: Record<string, string>;
}

/** Instance shape of an AJAX failure. This package provides no constructor or runtime guard. */
export interface AjaxError extends Error {
  /** HTTP status, or zero when no response was received. */
  readonly status: number;
  readonly body: unknown;
  /** Server-side request trace identifier, when supplied. */
  readonly requestId: string | undefined;
}

/** Requests using the Power Pages session and automatic CSRF token handling. */
export interface IAjax {
  /** Makes a request. Failures reject; catch variables are not automatically typed as AjaxError. */
  request<TBody = unknown, TData = unknown>(
    options: AjaxRequestOptions<TBody>,
  ): Promise<AjaxResponse<TData>>;
}
