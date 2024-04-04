function maxDepth(s: string): number {
  let result = 0;
  let deep = 0;
  for (const c of s) {
    if (c === "(") {
      result = Math.max(result, ++deep);
    } else if (c === ")") {
      --deep;
    }
  }
  return result;
}
