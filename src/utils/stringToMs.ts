import ms from "ms";

export default function stringToMs(string: string): number {
  let milliseconds = 0;
  return string.split(" ").forEach(x => (milliseconds += ms(x))), milliseconds;
}
