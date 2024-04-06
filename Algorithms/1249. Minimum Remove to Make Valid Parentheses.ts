function minRemoveToMakeValid(s: string): string {
  let l = 0;
  let r = 0;
  for (const c of s) {
    if (c === "(") {
      l += 1;
    } else if (c === ")") {
      if (r < l) {
        r += 1;
      }
    }
  }

  let hasL = 0;
  let result = "";
  for (const c of s) {
    if (c === "(") {
      if (hasL < r) {
        hasL += 1;
        result += c;
      }
    } else if (c === ")") {
      if (hasL !== 0 && r !== 0) {
        r -= 1;
        hasL -= 1;
        result += c;
      }
    } else {
      result += c;
    }
  }
  return result;
}
