function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const map = {};
  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  const counts: number[] = Object.values(map);
  counts.sort((a, b) => b - a);
  while (true) {
    const temp = counts.pop();
    if (temp > k) {
      counts.push(temp);
      break;
    }
    if (temp === k) {
      break;
    }
    k -= temp;
  }

  return counts.length;
}
