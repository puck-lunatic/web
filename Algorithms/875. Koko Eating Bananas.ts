function minEatingSpeed(piles: number[], h: number): number {
  let left: number = 1,
    right: number = Math.max(...piles);
  while (left < right) {
    const mid: number = (left + right) >> 1;
    let count: number = 0;
    for (const x of piles) {
      count += Math.ceil(x / mid);
    }
    if (count <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
