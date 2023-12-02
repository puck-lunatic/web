function countCharacters(words: string[], chars: string): number {
  const charObject = {};
  for (const char of chars) {
    charObject[char] =
      charObject[char] === undefined ? 1 : charObject[char] + 1;
  }
  const filteredWords = words.filter((word) => {
    const temp = { ...charObject };
    for (const c of word) {
      if (!temp[c]) {
        return false;
      }
      temp[c] = temp[c] - 1;
    }
    return true;
  });

  return filteredWords.reduce((a, c) => a + c.length, 0);
}
