/**
 * Returns a number from a hex color string
 * @param {string} hex hex color
 * @returns {number} color as integer
 */
export default function colorToInt(hex: string): number {
  return parseInt(hex.replaceAll("#", ""), 16);
}
