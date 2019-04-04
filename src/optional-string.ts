import * as t from 'io-ts';

type OptionalString = string | undefined;

function isOptionalString(u: unknown): u is OptionalString {
  return typeof u === 'undefined' || typeof u === 'string';
}

export const optionalString = new t.Type<string | undefined>(
  'args',
  isOptionalString,
  (u, c) => (isOptionalString(u) ? t.success(u) : t.failure(u, c)),
  t.identity,
);
