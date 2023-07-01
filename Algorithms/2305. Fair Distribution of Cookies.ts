function distributeCookies(cookies: number[], k: number): number {
  const children = new Array(k).fill(0);
  let result = Number.MAX_SAFE_INTEGER;
  const dfs = (i: number) => {
    if (i >= cookies.length) {
      result = Math.max(...children);
      return;
    }
    for (let j = 0; j < k; j++) {
      if (
        children[j] + cookies[i] >= result ||
        (j > 0 && children[j] === children[j - 1])
      ) {
        continue;
      }
      children[j] += cookies[i];
      dfs(i + 1);
      children[j] -= cookies[i];
    }
  };
  dfs(0);
  return result;
}
