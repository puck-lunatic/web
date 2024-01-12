function halvesAreAlike(s: string): boolean {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const chars = s.split("");
  while (chars.length !== 0) {
    const l = chars.shift();
    if (vowels.includes(l)) {
      count += 1;
    }
    const r = chars.pop();
    if (vowels.includes(r)) {
      count -= 1;
    }
  }
  return count === 0;
}
