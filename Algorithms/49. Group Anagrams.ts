function groupAnagrams(strs: string[]): string[][] {
  const map = {};
  for (const str of strs) {
    const chars = str.split("");
    chars.sort((a, b) => (a < b ? -1 : 1));
    const orderedStr = chars.join("");
    const arr = map[orderedStr] ?? [];
    arr.push(str);
    map[orderedStr] = arr;
  }
  return Object.values(map);
}
