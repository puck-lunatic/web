function subarraysWithKDistinct(nums: number[], k: number): number {
  const helper = (k: number): number => {
    if (k === 0) {
      return 0;
    }
    const cur: Map<number, number> = new Map();

    let result = 0;
    let l = 0;

    for (let i = 0; i < nums.length; i++) {
      cur.set(nums[i], (cur.get(nums[i]) || 0) + 1);

      while (cur.size > k) {
        cur.set(nums[l], cur.get(nums[l]) - 1);

        if (cur.get(nums[l]) === 0) {
          cur.delete(nums[l]);
        }
        l++;
      }
      result += i - l + 1;
    }

    return result;
  };

  return helper(k) - helper(k - 1);
}
