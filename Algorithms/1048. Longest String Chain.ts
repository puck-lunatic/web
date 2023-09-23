function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  let result = 0;
  let hm: Map<string, number> = new Map();
  for (const word of words) {
    let c = 1;
    for (let i = 0; i < word.length; i++) {
      let pre = word.substring(0, i) + word.substring(i + 1);
      c = Math.max(c, (hm.get(pre) || 0) + 1);
    }
    hm.set(word, c);
    result = Math.max(result, c);
  }
  return result;
}
