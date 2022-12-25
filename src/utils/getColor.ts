/**
 * Returns the color code for the given color name
 * @param {string} cN color name
 * @returns {string} hex color
 */
export default function getColor(cN: string): number {
  if ("red" === cN || "error" === cN) return parseInt("ff0000", 16);

  if ("green" === cN || "success" === cN) return parseInt("37E001", 16);

  if ("yellow" === cN || "warning" === cN) return parseInt("ffff00", 16);

  return parseInt("4647EB", 16);
}
