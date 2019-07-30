import { emptyArray } from './empty-array';
import { isRight, isLeft } from 'fp-ts/lib/Either';

describe(emptyArray.name, () => {
  it('decodes a "right" if input is an empty array', () => {
    const decoded = emptyArray.decode([]);
    expect(isRight(decoded)).toBe(true);
  });

  it('decodes a "left" if input is a non-empty array', () => {
    const decoded = emptyArray.decode(['foo']);
    expect(isLeft(decoded)).toBe(true);
  });
});
