import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft, fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

import { CodedError } from '@carnesen/coded-error';

export function cast<A, O, I>(codec: t.Type<A, O, I>, input: I, code?: any) {
  const decoded = codec.decode(input);

  if (isLeft(decoded)) {
    const message = PathReporter.report(decoded).join('. ');
    throw new CodedError(message, code);
  }
  return pipe(
    decoded,
    fold(
      () => {
        const message = PathReporter.report(decoded).join('. ');
        throw new CodedError(message, code);
      },
      output => output,
    ),
  );
}
