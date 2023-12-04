function largestGoodInteger(num: string): string {
  const numStrs = num.toString().split("");
  const n = numStrs.length;
  let result = "";
  let max = -1;
  for (let i = 2; i < n; i++) {
    const char = numStrs[i];
    if (numStrs[i - 1] === char && numStrs[i - 2] === char) {
      const temp = Number(char) * 111;
      if (temp > max) {
        max = temp;
        result = [char, char, char].join("");
      }
    }
  }

  return result;
}
