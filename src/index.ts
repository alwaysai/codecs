import * as t from 'io-ts';

export { cast } from './cast';

export const nullableString = t.union([t.string, t.null], 'nullableString');
export const uuid = t.string;

export { optionalString } from './optional-string';
export { emptyArray } from './empty-array';
export {
  any,
  array,
  intersection,
  Mixed,
  null,
  partial,
  string,
  tuple,
  type,
  TypeOf,
  undefined,
  union,
  unknown,
  UnknownArray,
} from 'io-ts';
