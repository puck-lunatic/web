function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (word.split("").reverse().join("") === word) {
      return word;
    }
  }
  return "";
}
