function minFlips(a: number, b: number, c: number): number {
  let result = 0;
  for (let i = 0; i < 30; i++) {
    const x = (a >> i) & 1;
    const y = (b >> i) & 1;
    const z = (c >> i) & 1;
    if ((x | y) !== z) {
      if (x === 1 && y === 1) {
        result += 2;
      } else {
        result += 1;
      }
    }
  }
  return result;
}
