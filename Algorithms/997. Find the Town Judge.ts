function findJudge(n: number, trust: number[][]): number {
  if (n === 1) {
    return 1;
  }
  const candidates1 = Array.from({ length: n }, (_, i) => i + 1).filter(
    (c) => !trust.map((t) => t[0]).includes(c)
  );
  const map = {};
  for (const t of trust) {
    map[t[1]] = (map[t[1]] ?? 0) + 1;
  }
  const candidates2 = Object.entries(map)
    .filter((e) => e[1] === n - 1)
    .map((e) => Number(e[0]))
    .filter((e) => candidates1.includes(e));
  return candidates2.length === 1 ? candidates2[0] : -1;
}
