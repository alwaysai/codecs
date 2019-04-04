import { emptyArray } from './empty-array';

describe(emptyArray.name, () => {
  it('decodes a "right" if input is an empty array', () => {
    const decoded = emptyArray.decode([]);
    expect(decoded.isRight()).toBe(true);
  });

  it('decodes a "left" if input is a non-empty array', () => {
    const decoded = emptyArray.decode(['foo']);
    expect(decoded.isLeft()).toBe(true);
  });
});
