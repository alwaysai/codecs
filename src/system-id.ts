import * as t from 'io-ts';
import keyMirror = require('keymirror');

export const SystemId = keyMirror({
  local: null,
  development: null,
  production: null,
});

export type SystemId = keyof typeof SystemId;

export const systemId = t.keyof(SystemId);

export const SYSTEM_IDS = Object.keys(SystemId) as SystemId[];
