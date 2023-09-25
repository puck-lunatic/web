function findTheDifference(s: string, t: string): string {
  const n = t.length;
  const sChars = s.split("");
  sChars.sort();
  const tChars = t.split("");
  tChars.sort();
  for (let i = 0; i < n - 1; i++) {
    if (sChars[i] !== tChars[i]) {
      return tChars[i];
    }
  }
  return tChars[n - 1];
}
