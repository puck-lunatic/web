function numSimilarGroups(strs: string[]): number {
  const length = strs.length;
  const p = new Array(length);
  const check = (a: string, b: string) => {
    let cnt = 0;
    const n = a.length;
    for (let i = 0; i < n; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        cnt++;
      }
    }
    return cnt <= 2;
  };
  const find = (x: number) => {
    if (p[x] !== x) {
      p[x] = find(p[x]);
    }
    return p[x];
  };
  for (let i = 0; i < length; i++) {
    p[i] = i;
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (check(strs[i], strs[j])) {
        p[find(i)] = find(j);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < length; i++) {
    if (i === find(i)) {
      res++;
    }
  }
  return res;
}
