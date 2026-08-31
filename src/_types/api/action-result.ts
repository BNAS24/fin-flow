export type FieldErrors = Record<string, string>;

export type ServerActionResult<T> =
  | undefined
  | { ok: true; data: T }
  | { ok: false; fieldErrors?: FieldErrors; message?: string };