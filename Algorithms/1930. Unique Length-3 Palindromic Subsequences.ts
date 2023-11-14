function countPalindromicSubsequence(s: string): number {
  let result = 0;
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < 26; i++) {
    const char = alphabets[i];
    const l = s.indexOf(char),
      r = s.lastIndexOf(char);
    const cs: Set<string> = new Set();
    for (let j = l + 1; j < r; j++) {
      cs.add(s.charAt(j));
    }
    result += cs.size;
  }
  return result;
}
