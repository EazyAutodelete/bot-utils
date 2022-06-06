import ms from "ms";

export function stringToMs(string: string): number {
  let milliseconds = 0;
  return string.split(" ").forEach(x => (milliseconds += ms(x))), milliseconds;
}
