/**
 * Returns a string with the first character in uppercase.
 * @param {string} str string to uppercase first character
 * @returns {string} string with first character in uppercase
 */
export default function uppercaseFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
