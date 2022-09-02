/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param {number} min minimum number
 * @param {number} max maximum number
 * @returns {number} random integer
 */
function randomInt(max: number): number;
function randomInt(min: number, max?: number): number {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomInt;
