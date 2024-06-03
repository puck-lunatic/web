function appendCharacters(s: string, t: string): number {
  const n = s.length;
  const chars = t.split("");
  for (let i = 0; i < n; i++) {
    if (chars.length === 0) {
      break;
    }
    if (s.charAt(i) === chars[0]) {
      chars.shift();
    }
  }
  return chars.length;
}
