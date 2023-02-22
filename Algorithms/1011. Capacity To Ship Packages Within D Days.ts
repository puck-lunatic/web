function shipWithinDays(weights: number[], days: number): number {
  let left: number = 1;
  let right: number = Number.MAX_SAFE_INTEGER;
  const canCarry = (carry: number): boolean => {
    let count = 1;
    let acc: number = 0;
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] > carry) {
        return false;
      }
      if (weights[i] + acc <= carry) {
        acc += weights[i];
      } else {
        acc = weights[i];
        count++;
      }
    }
    return count <= days;
  };
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canCarry(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
