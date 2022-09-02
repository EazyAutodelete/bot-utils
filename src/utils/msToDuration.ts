export default function msToDuration(ms: number): string {
  const o = Math.floor((ms / 220752e6) % 999),
    t = Math.floor((ms / 6048e5) % 51),
    r = Math.floor((ms / 864e5) % 7),
    a = Math.floor((ms / 36e5) % 24),
    s = Math.floor((ms / 6e4) % 60),
    f = Math.floor((ms / 1e3) % 60);
  return [
    1 === o ? o + " year" : o + " years",
    1 === t ? t + " week" : t + " weeks",
    1 === r ? r + " day" : r + " days",
    1 === a ? a + " hour" : a + " hours",
    1 === s ? s + " minute" : s + " minutes",
    1 === f ? f + " second" : f + " seconds",
  ]
    .filter(e => !e.startsWith("0"))
    .join(", ");
}
