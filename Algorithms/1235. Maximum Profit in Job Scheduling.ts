function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const n = startTime.length;
  const dp = new Array(n).fill(0);
  const startIndexes = new Array(n).fill(0).map((_, i) => i);
  startIndexes.sort((i, j) => startTime[i] - startTime[j]);

  const search = (x: number) => {
    let l = 0;
    let r = n;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (startTime[startIndexes[mid]] >= x) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };

  const dfs = (i: number): number => {
    if (i >= n) {
      return 0;
    }
    if (dp[i] !== 0) {
      return dp[i];
    }
    const j = search(endTime[startIndexes[i]]);
    return (dp[i] = Math.max(dfs(i + 1), dfs(j) + profit[startIndexes[i]]));
  };

  return dfs(0);
}
