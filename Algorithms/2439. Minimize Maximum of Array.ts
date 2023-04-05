function minimizeArrayValue(nums: number[]): number {
  let left = 0;
  let right = 10 ** 9;
  let length = nums.length;

  const condition = (mid: number): boolean => {
    let carry = 0;

    for (let i = length - 1; i >= 0; i--) {
      const cur = nums[i] + carry;
      carry = 0;

      if (cur > mid) {
        carry = cur - mid;
      }
    }

    return carry === 0;
  };

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
