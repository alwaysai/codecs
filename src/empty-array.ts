import * as t from 'io-ts';

function isEmptyArray(u: unknown): u is [] {
  return Array.isArray(u) && u.length === 0;
}

export const emptyArray = new t.Type<[]>(
  'args',
  isEmptyArray,
  (u, c) => (isEmptyArray(u) ? t.success(u) : t.failure(u, c)),
  t.identity,
);
