function repeatedSubstringPattern(s: string): boolean {
  const n = s.length;
  const mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    const subLen = i + 1;
    if (n % subLen !== 0) {
      continue;
    }
    const sub = s.slice(0, subLen);
    let j: number;
    for (j = subLen; j < n; j += subLen) {
      if (s.slice(j, j + subLen) !== sub) {
        break;
      }
    }
    if (j === n) {
      return true;
    }
  }
  return false;
}
