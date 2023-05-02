function arraySign(nums: number[]): number {
  const product = nums.reduce((acc, cur) => acc * cur, 1);
  if (product < 0) {
    return -1;
  } else if (product > 0) {
    return 1;
  } else {
    return 0;
  }
}
