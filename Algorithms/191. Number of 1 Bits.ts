function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split("")
    .filter((c) => c === "1").length;
}
