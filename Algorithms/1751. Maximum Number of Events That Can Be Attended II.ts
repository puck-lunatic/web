function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[1] - b[1]);
  const n = events.length;
  const dp: number[][] = Array.from({ length: n + 1 }, (_) =>
    new Array(k + 1).fill(0)
  );

  const search = (target: number, end: number): number => {
    let l = 0;
    let r = end;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (events[mid][1] >= target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };
  for (let i = 1; i <= n; i++) {
    const [start, , val] = events[i - 1];
    const event = search(start, i - 1);
    for (let j = 1; j <= k; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[event][j - 1] + val);
    }
  }

  return dp[n][k];
}
