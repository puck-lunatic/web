function frequencySort(s: string): string {
  const map = {};
  for (const c of s) {
    map[c] = (map[c] ?? 0) + 1;
  }
  const arr = Object.entries(map);
  arr.sort((a, b) => Number(b[1]) - Number(a[1]));

  return arr.map((e) => new Array(e[1]).fill(e[0]).join("")).join("");
}
