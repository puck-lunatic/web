const MOD: number = 1_000_000_007;

function numSubseq(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const arr = new Array(length + 1);
  arr[0] = 1;
  for (let i = 1; i <= length; i++) {
    arr[i] = (arr[i - 1] * 2) % MOD;
  }
  let result = 0;
  const search = (nums: number[], x: number, left: number) => {
    let right = nums.length;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
  for (let i = 0; i < length; i++) {
    if (nums[i] * 2 > target) {
      break;
    }
    const j = search(nums, target - nums[i], i + 1) - 1;
    result = (result + arr[j - i]) % MOD;
  }

  return result;
}
