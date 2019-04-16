import * as t from 'io-ts';

const uuidRegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface UuidBrand {
  readonly uuid: unique symbol;
}

export type Uuid = t.Branded<string, UuidBrand>;

export interface UuidC extends t.Type<Uuid, string, unknown> {}

export const uuid: UuidC = t.brand(
  t.string,
  (s): s is Uuid => uuidRegExp.test(s),
  'uuid',
);

// This file was taken from https://github.com/gcanti/io-ts-types/blob/7008e7bd57a189c3ba8b1dd94905f481d1dd4787/src/UUID.ts
// and is MIT-licensed separately from the rest of this codebase as follows:

/*
MIT License

Copyright (c) 2017 Giulio Canti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
