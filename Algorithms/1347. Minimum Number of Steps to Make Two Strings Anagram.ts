function minSteps(s: string, t: string): number {
  const counts = {};
  for (const c of s) {
    counts[c] = (counts[c] ?? 0) + 1;
  }
  for (const c of t) {
    counts[c] = (counts[c] ?? 0) - 1;
  }

  return (Object.values(counts) as number[]).reduce(
    (a, c) => a + (c > 0 ? c : 0),
    0
  );
}
