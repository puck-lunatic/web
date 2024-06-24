function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);
  const n = position.length;
  let l = 1;
  let r = position[n - 1];
  const check = (f: number): boolean => {
    let prev = position[0];
    let count = 1;
    for (let i = 1; i < n; i++) {
      const cur = position[i];
      if (cur - prev >= f) {
        prev = cur;
        count += 1;
      }
    }
    return count >= m;
  };
  while (l < r) {
    const m = (l + r + 1) >> 1;
    if (check(m)) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  return l;
}
