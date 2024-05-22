function partition(s: string): string[][] {
  const n = s.length;
  const dp: boolean[][] = Array.from({ length: n }, (_) =>
    new Array(n).fill(true)
  );
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  const result: string[][] = [];
  const temp: string[] = [];
  const dfs = (i: number) => {
    if (i === n) {
      result.push(temp.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        temp.push(s.slice(i, j + 1));
        dfs(j + 1);
        temp.pop();
      }
    }
  };
  dfs(0);
  return result;
}
