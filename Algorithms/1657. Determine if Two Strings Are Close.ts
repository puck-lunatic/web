function closeStrings(word1: string, word2: string): boolean {
  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);
  for (const c of word1) {
    count1[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  for (const c of word2) {
    count2[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  for (let i = 0; i < 26; i++) {
    if ((count1[i] === 0) !== (count2[i] === 0)) {
      return false;
    }
  }
  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  return count1.join(".") === count2.join(".");
}
