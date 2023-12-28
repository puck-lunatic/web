function getLengthOfOptimalCompression(s: string, k: number): number {
  const dp = {};
  const n = s.length;
  const dfs = (cur: number, k: number, last: string, same: number): number => {
    if (k < 0) {
      return 101;
    } else if (n - cur === k) {
      return 0;
    }

    const key = `${cur}_${k}_${last}_${same}`;
    if (dp[key]) {
      return dp[key];
    }
    if (s[cur] === last) {
      const carry = [1, 9, 99].includes(same) ? 1 : 0;
      dp[key] = carry + dfs(cur + 1, k, last, same + 1);
      return dp[key];
    }
    const remain = 1 + dfs(cur + 1, k, s[cur], 1);
    const deleted = dfs(cur + 1, k - 1, last, same);
    dp[key] = Math.min(remain, deleted);
    return dp[key];
  };

  return dfs(0, k, undefined, 0);
}
