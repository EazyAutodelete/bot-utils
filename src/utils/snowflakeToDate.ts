/**
 *
 * @param {string} snowflake snowflake
 * @returns {string} duration
 */
export default function snowflakeToDate(snowflake: string): Date {
  const time = parseInt(snowflake) / 4194304 + 1420070400000;
  return new Date(time);
}
