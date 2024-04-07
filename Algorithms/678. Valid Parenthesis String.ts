function checkValidString(s: string): boolean {
  let x = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] !== ")") {
      x += 1;
    } else if (x > 0) {
      x -= 1;
    } else {
      return false;
    }
  }
  x = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== "(") {
      x += 1;
    } else if (x > 0) {
      x -= 1;
    } else {
      return false;
    }
  }
  return true;
}
