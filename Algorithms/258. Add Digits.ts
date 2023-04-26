function addDigits(num: number): number {
  let result = num;
  while (result > 9) {
    result = result
      .toString()
      .split("")
      .map((digit) => Number(digit))
      .reduce((acc, cur) => acc + cur, 0);
  }
  return result;
}
