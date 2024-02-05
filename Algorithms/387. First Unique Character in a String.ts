function firstUniqChar(s: string): number {
  const chars = s.split("");
  const map = {};
  for (const char of s) {
    map[char] = (map[char] ?? 0) + 1;
  }
  return (
    Object.entries(map)
      .filter((e) => e[1] === 1)
      .map((e) => chars.findIndex((c) => c === e[0]))[0] ?? -1
  );
}
