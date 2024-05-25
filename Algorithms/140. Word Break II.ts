function wordBreak(s: string, wordDict: string[]): string[] {
  const backtrack = (
    s: string,
    length: number,
    wordSet: Set<string>,
    index: number,
    map: Map<number, string[][]>
  ): string[][] => {
    if (map.has(index)) {
      return map.get(index);
    }
    const wordBreaks: string[][] = [];
    if (index === length) {
      wordBreaks.push([]);
    }
    for (let i = index + 1; i <= length; i++) {
      const word = s.substring(index, i);
      if (wordSet.has(word)) {
        const nextWordBreaks = backtrack(s, length, wordSet, i, map);
        for (const nextWordBreak of nextWordBreaks) {
          const wordBreak = [word, ...nextWordBreak];
          wordBreaks.push(wordBreak);
        }
      }
    }
    map.set(index, wordBreaks);
    return wordBreaks;
  };

  const map: Map<number, string[][]> = new Map();
  const wordBreaks = backtrack(s, s.length, new Set(wordDict), 0, map);
  const result: string[] = [];
  for (const wordBreak of wordBreaks) {
    result.push(wordBreak.join(" "));
  }

  return result;
}
