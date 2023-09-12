function minDeletions(s: string): number {
  let map = {};
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  let result = 0;
  let cnts: number[] = Object.values(map);
  cnts.sort((a, b) => a - b);
  // console.log(cnts);
  for (let i = 1; i < cnts.length; i++) {
    while (cnts[i] > 0 && i !== cnts.indexOf(cnts[i])) {
      cnts[i] -= 1;
      result += 1;
    }
  }
  return result;
}
