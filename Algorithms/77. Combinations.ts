function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const temp: number[] = [];
  const dfs = (i: number) => {
    if (temp.length === k) {
      result.push(temp.slice());
      return;
    }
    if (i > n) {
      return;
    }
    temp.push(i);
    dfs(i + 1);
    temp.pop();
    dfs(i + 1);
  };
  dfs(1);
  return result;
}
