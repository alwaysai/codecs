import { runAndCatch } from '@carnesen/run-and-catch';
import { isRight } from 'fp-ts/lib/Either';

import { systemId } from './system-id';
import { cast } from './cast';

describe(systemId.name, () => {
  it('validates a systemId', () => {
    const decoded = systemId.decode('development');
    expect(isRight(decoded)).toBe(true);
  });

  it('throws a validation error if the input is bad', async () => {
    const ex = await runAndCatch(cast, systemId, '0-0');
    expect(ex.message).toMatch(/invalid value.*local.*dev.*prod.*/i);
  });
});
