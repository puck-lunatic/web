function largestOddNumber(num: string): string {
  const n = num.length;
  const i = num
    .split("")
    .reverse()
    .findIndex((e) => Number(e) % 2 === 1);
  return i === -1 ? "" : num.substring(0, n - i);
}
