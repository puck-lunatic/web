function numSpecialEquivGroups(words: string[]): number {
  const set: Set<string> = new Set();

  for (let i = 0; i < words.length; i++) {
    const counts = [new Uint8Array(26), new Uint8Array(26)];
    for (let j = 0; j < words[i].length; j++) {
      counts[j % 2][words[i].charCodeAt(j) - 97]++;
    }
    set.add(counts[0].join("") + counts[1].join(""));
  }

  return set.size;
}
