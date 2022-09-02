/**
 * Returns a string with the date and time in the format YYYY.MM.DD HH:MM:SS
 * @param {number} ms milliseconds
 * @returns {string} date
 */
export default function msToDate(ms: number): string {
  const e = new Date(ms),
    g =
      1 === e.getDate().toString().length
        ? "0" + e.getDate().toString()
        : e.getDate().toString(),
    n =
      1 === (e.getMonth() + 1).toString().length
        ? "0" + (e.getMonth() + 1).toString()
        : (e.getMonth() + 1).toString(),
    o =
      1 === e.getHours().toString().length
        ? "0" + e.getHours().toString()
        : e.getHours().toString(),
    r =
      1 === e.getMinutes().toString().length
        ? "0" + e.getMinutes().toString()
        : e.getMinutes().toString(),
    i =
      1 === e.getSeconds().toString().length
        ? "0" + e.getSeconds().toString()
        : e.getSeconds().toString();
  return e.getFullYear() + "." + n + "." + g + " " + o + ":" + r + ":" + i;
}
