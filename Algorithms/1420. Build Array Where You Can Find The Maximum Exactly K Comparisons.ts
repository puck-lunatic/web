function numOfArrays(n: number, m: number, k: number): number {
  const MOD = 1_000_000_007;
  const cache = {};
  const dfs = (
    maxValue: number,
    costRemaining: number,
    len: number
  ): number => {
    if (costRemaining < 0) {
      return 0;
    }
    if (len === n) {
      return costRemaining ? 0 : 1;
    }
    const key = [maxValue, costRemaining, len].join("-");
    if (cache[key] !== undefined) {
      return cache[key];
    }
    len += 1;

    let total = 0;
    for (let i = 1; i <= m; i++) {
      const nextCostRemaining = costRemaining - (i > maxValue ? 1 : 0);
      total += dfs(Math.max(i, maxValue), nextCostRemaining, len);
    }

    return (cache[key] = total % MOD);
  };
  return dfs(-1, k, 0);
}
