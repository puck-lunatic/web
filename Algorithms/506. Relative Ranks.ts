function findRelativeRanks(score: number[]): string[] {
  const n = score.length;
  const rank = [...score];
  rank.sort((a, b) => b - a);
  const map: Map<number, string> = new Map();
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      map.set(rank[i], "Gold Medal");
      continue;
    }

    if (i === 1) {
      map.set(rank[i], "Silver Medal");
      continue;
    }

    if (i === 2) {
      map.set(rank[i], "Bronze Medal");
      continue;
    }
    map.set(rank[i], String(i + 1));
  }
  return score.map((s) => map.get(s));
}
