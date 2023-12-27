function minCost(colors: string, neededTime: number[]): number {
  const n = neededTime.length;
  let result = 0;
  for (let i = 0, j = 0; i < n; i = j) {
    j = i;
    let s = 0;
    let mx = 0;
    while (j < n && colors.charAt(j) === colors.charAt(i)) {
      s += neededTime[j];
      mx = Math.max(mx, neededTime[j]);
      j += 1;
    }
    if (j - i > 1) {
      result += s - mx;
    }
  }
  return result;
}
