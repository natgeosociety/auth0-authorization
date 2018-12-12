import * as assert from 'assert';
import { buildQueryString } from './build-query-string';

// TODO: Use reat test framework
function main() {
  const queryString = buildQueryString({first: 'one', second: 'two'});
  const expectedQueryString = 'first=one&second=two';
  assert(queryString === expectedQueryString, `${queryString} does not equal ${expectedQueryString}`);
}

main();
