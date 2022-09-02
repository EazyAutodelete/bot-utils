/**
 * Returns the color code for the given color name
 * @param {string} cN color name
 * @returns {string} hex color
 */
export default function getColor(cN: string): string {
  if ("red" === cN || "error" === cN) return "#ff0000";

  if ("green" === cN || "success" === cN) return "#37E001";

  if ("yellow" === cN || "warning" === cN) return "#ffff00";

  return "#4647EB";
}
