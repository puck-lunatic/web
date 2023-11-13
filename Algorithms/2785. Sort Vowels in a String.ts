function sortVowels(s: string): string {
  const result: string[] = [];
  const sorted: string[] = [];
  const vowels = "AEIOUaeiou".split("");
  for (const char of s) {
    if (vowels.includes(char)) {
      result.push("_");
      sorted.push(char);
    } else {
      result.push(char);
    }
  }
  sorted.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  return result.map((char) => (char === "_" ? sorted.shift() : char)).join("");
}
