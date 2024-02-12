function majorityElement(nums: number[]): number {
  const n = nums.length;
  const objects = {};
  for (const num of nums) {
    objects[num] = (objects[num] ?? 0) + 1;
    if (objects[num] > n / 2) {
      return num;
    }
  }
  throw Error("Invalid Testcas!");
}
