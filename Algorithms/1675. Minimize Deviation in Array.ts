function minimumDeviation(nums: number[]): number {
  const swap = (nums: number[], x: number, y: number): void => {
    const tmp: number = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  };

  const maxHeapSort = (nums: number[], n: number, parent: number): void => {
    let left = parent * 2 + 1;
    while (left < n) {
      let maxChild: number = left;
      const right: number = left + 1;
      if (right < n && nums[right] > nums[left]) {
        maxChild = right;
      }
      if (nums[maxChild] <= nums[parent]) {
        return;
      }
      swap(nums, parent, maxChild);
      parent = maxChild;
      left = parent * 2 + 1;
    }
  };

  const n = nums.length;
  if (n < 2) {
    return 0;
  }
  nums.forEach((v, i) => v % 2 === 1 && (nums[i] *= 2));
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    maxHeapSort(nums, n, i);
  }
  let min: number = Math.min(...nums);
  let max: number = nums[0];
  let result: number = max - min;
  while (max % 2 === 0) {
    max /= 2;
    min = Math.min(max, min);
    nums[0] = max;
    maxHeapSort(nums, n, 0);
    max = nums[0];
    result = Math.min(result, max - min);
  }
  return result;
}
