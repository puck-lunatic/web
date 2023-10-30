function sortByBits(arr: number[]): number[] {
  arr.sort((a, b) => {
    const count1a = a
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;
    const count1b = b
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;
    if (count1a < count1b) {
      return -1;
    }
    if (count1a > count1b) {
      return 1;
    }
    return a - b;
  });
  return arr;
}
