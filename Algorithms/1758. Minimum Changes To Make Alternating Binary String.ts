function minOperations(s: string): number {
  const n = s.length;
  if (n === 1) {
    return 0;
  }
  let startWith0 = 0;
  let startWith1 = 0;
  s.split("").forEach((c, i) => {
    if (i % 2 === 0) {
      if (c === "0") {
        startWith1 += 1;
      } else {
        startWith0 += 1;
      }
    } else {
      if (c === "0") {
        startWith0 += 1;
      } else {
        startWith1 += 1;
      }
    }
  });

  return Math.min(startWith0, startWith1);
}
