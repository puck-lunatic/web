function poorPigs(
  buckets: number,
  minutesToDie: number,
  minutesToTest: number
): number {
  const base = Math.floor(minutesToTest / minutesToDie) + 1;
  let res = 0;
  for (let p = 1; p < buckets; p *= base) {
    res += 1;
  }
  return res;
}
