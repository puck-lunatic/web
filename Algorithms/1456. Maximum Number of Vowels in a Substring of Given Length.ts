function maxVowels(s: string, k: number): number {
  const chars = s.split("");
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let result = chars.slice(0, k).filter((char) => vowels.has(char)).length;
  const length = s.length;
  let current = result;
  for (let i = 1; i < length - k + 1; i++) {
    if (vowels.has(chars[i - 1])) {
      current--;
    }
    if (vowels.has(chars[i + k - 1])) {
      current++;
    }

    if (current === k) {
      return current;
    }
    result = Math.max(result, current);
  }

  return result;
}
