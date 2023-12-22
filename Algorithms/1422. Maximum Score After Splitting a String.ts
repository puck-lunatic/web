function maxScore(s: string): number {
  const n = s.length;
  let result = -1;
  for (let i = 1; i < n; i++) {
    const l = s.slice(0, i);
    const r = s.slice(i, n);
    result = Math.max(
      result,
      l.split("").filter((c) => c === "0").length +
        r.split("").filter((c) => c === "1").length
    );
  }

  return result;
}
