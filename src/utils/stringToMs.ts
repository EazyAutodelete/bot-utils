import ms from "ms";

/**
 * Returns the number of milliseconds from a given string.
 * @param {string} string string to convert to milliseconds
 * @returns {number} milliseconds
 */
export default function stringToMs(string: string): number {
  let milliseconds = 0;
  return string.split(" ").forEach(x => (milliseconds += ms(x))), milliseconds;
}
