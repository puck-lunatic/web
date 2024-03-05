function minimumLength(s: string): number {
  const chars = s.split("");
  while (chars.length > 1) {
    const n = chars.length;
    if (chars[0] !== chars[n - 1]) {
      break;
    }
    const cur = chars.shift();
    while (chars.length > 0) {
      if (chars[0] === cur) {
        chars.shift();
      } else {
        break;
      }
    }
    if (chars.length === 0) {
      return 0;
    }
    while (chars.length > 0) {
      if (chars[chars.length - 1] === cur) {
        chars.pop();
      } else {
        break;
      }
    }
    if (chars.length === 0) {
      return 0;
    }
  }
  return chars.length;
}
