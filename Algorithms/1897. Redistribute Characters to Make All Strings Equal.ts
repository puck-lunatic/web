function makeEqual(words: string[]): boolean {
  const n = words.length;
  const map = {};
  for (const word of words) {
    for (const char of word) {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
  }

  return Object.values(map).every((value) => Number(value) % n === 0);
}
