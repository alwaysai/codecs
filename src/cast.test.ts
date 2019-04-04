import * as t from 'io-ts';

import { cast } from './cast';

const codec = t.type({
  username: t.string,
});

describe(cast.name, () => {
  it('returns a properly-typed clone of the input value', () => {
    const u: unknown = { username: 'foo' };
    const value = cast(codec, { username: 'foo' });
    expect(value).toEqual(u);
    expect(value).not.toBe(u);
  });

  it('throws a validation error if the input is bad', () => {
    expect(() => cast(codec, {})).toThrow(/Invalid value.*username/i);
  });
});
