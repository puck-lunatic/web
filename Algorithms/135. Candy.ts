function candy(ratings: number[]): number {
  const n = ratings.length;
  if (n === 1) {
    return 1;
  }
  let result = 0;
  const left2right = new Array(n).fill(1);
  const right2left = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left2right[i] = left2right[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right2left[i] = right2left[i + 1] + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    result += Math.max(left2right[i], right2left[i]);
  }

  return result;
}
