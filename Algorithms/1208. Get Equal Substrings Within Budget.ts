function equalSubstring(s: string, t: string, maxCost: number): number {
  const getCost = (index: number) =>
    Math.abs(s[index].charCodeAt(0) - t[index].charCodeAt(0));
  const n = s.length;
  let result = 0;
  let cost = 0;
  for (let l = 0, r = 0; r < n; r++) {
    cost += getCost(r);
    while (cost > maxCost) {
      cost -= getCost(l++);
    }
    result = Math.max(result, r - l + 1);
  }
  return result;
}
