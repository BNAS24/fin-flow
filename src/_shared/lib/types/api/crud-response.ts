// These generic types should be moved to the correct folder since they dont just apply to this file
export type QueryResult<T> = T | null;
export type UpdateResult<T> = T | null;
export type DeleteResult<T> = T | null | string;
export type CreateResult<T> = T | null;

// These generic types should be moved to the correct folder since they dont just apply to this file
export type QueryResultAsync<T> = Promise<T | null>;
export type UpdateResultAsync<T> = Promise<T | null>;
export type DeleteResultAsync<T> = Promise<T | null>;
export type CreateResultAsync<T> = Promise<T | null>;