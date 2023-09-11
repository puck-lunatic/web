function groupThePeople(groupSizes: number[]): number[][] {
  const result: number[][] = [];
  const map = {};
  const n = groupSizes.length;
  for (let i = 0; i < n; i++) {
    const size = groupSizes[i];
    if (!map[size]) {
      map[size] = [];
    }
    map[size].push(i);
    if (map[size].length === size) {
      result.push(map[size]);
      delete map[size];
    }
  }
  return result;
}
