function countSubstrings(s: string): number {
  let result = 0;
  const n = s.length;
  for (let k = 0; k < n * 2 - 1; k++) {
    let i = k >> 1;
    let j = (k + 1) >> 1;
    while (~i && j < n && s[i] === s[j]) {
      result += 1;
      i -= 1;
      j += 1;
    }
  }
  return result;
}
