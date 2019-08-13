import { runAndCatch } from '@carnesen/run-and-catch';

import { uuid } from './uuid';
import { cast } from './cast';
import { isRight } from 'fp-ts/lib/Either';

const validValue = '00000000-0000-0000-0000-000000000000';

describe(uuid.name, () => {
  it('validates a uuid', () => {
    const decoded = uuid.decode(validValue);
    expect(isRight(decoded)).toBe(true);
    expect((decoded as any).right).toBe(validValue);
    expect(cast(uuid, validValue)).toBe(validValue);
  });

  it('throws a validation error if the input is bad', async () => {
    const ex = await runAndCatch(cast, uuid, '0-0');
    expect(ex.message).toMatch(/invalid value.*uuid/i);
  });
});
