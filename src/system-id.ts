import * as t from 'io-ts';

export const systemId = t.keyof({
  local: null,
  development: null,
  production: null,
});
