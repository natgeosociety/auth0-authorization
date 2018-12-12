/**
 * Create query string from map of key-value pairs.
 *
 * Example:
 * Input: {first: 'one', second: 'two'}
 * Output: 'first=one&second=two'
 * @param queryStringMap {[key: string]: string}
 * @returns string
 */
export function buildQueryString(queryStringMap: {[key: string]: string}): string {
  if (!queryStringMap) {
    return '';
  }
  const entries = Object.entries(queryStringMap);
  // Keep only non-empty entries
  const nonEmptyEntries = entries.filter((entry) => !!entry[1]);
  const pairs = nonEmptyEntries.map((entry) => `${entry[0]}=${entry[1]}`);
  const queryString = pairs.join('&');
  return queryString;
}
