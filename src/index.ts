import * as t from 'io-ts';

export { cast } from './cast';

export const nullableString = t.union([t.string, t.null], 'nullableString');
export const uuid = t.string;

export { optionalString } from './optional-string';
export { emptyArray } from './empty-array';
