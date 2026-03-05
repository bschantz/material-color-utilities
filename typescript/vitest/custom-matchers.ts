/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {hexFromArgb} from '../src';

/**
 * Exports a matcher called `matchesColor` that takes two numbers, and logs
 * the equivalent hex codes on failure.
 */
import { expect } from 'vitest';

expect.extend({
  matchesColor(actual: number, expected: number) {
    const { isNot } = this;
    return {
      pass: actual === expected,
      message: () => `Expected color ${hexFromArgb(actual)} to ${isNot ? 'NOT' : ''} match: ${hexFromArgb(expected)}`,
    };
  },
});
