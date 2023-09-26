function removeDuplicateLetters(s: string): string {
  const n = s.length;
  const last: number[] = new Array(26);
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  const stack: string[] = new Array();
  let mask = 0;
  for (let i = 0; i < n; i++) {
    const c = s.charAt(i);
    if (((mask >> (c.charCodeAt(0) - "a".charCodeAt(0))) & 1) === 1) {
      continue;
    }
    while (
      stack.length !== 0 &&
      stack[stack.length - 1] > c &&
      last[stack[stack.length - 1].charCodeAt(0) - "a".charCodeAt(0)] > i
    ) {
      const cc = stack.pop();
      mask ^= 1 << (cc.charCodeAt(0) - "a".charCodeAt(0));
    }
    stack.push(c);
    mask |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
  }

  return stack.join("");
}
