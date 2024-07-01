function threeConsecutiveOdds(arr: number[]): boolean {
  let count = 0;
  for (const num of arr) {
    if (num % 2 === 1) {
      count += 1;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
}
