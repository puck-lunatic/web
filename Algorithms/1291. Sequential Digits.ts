function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = [];
  for (let i = 1; i < 9; i++) {
    let x = i;
    for (let j = i + 1; j < 10; j++) {
      x = x * 10 + j;
      if (x >= low && x <= high) {
        result.push(x);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}
