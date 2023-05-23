class KthLargest {
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = [...nums.sort((a, b) => b - a)];
  }
  private k: number;
  private nums: number[];

  add(val: number): number {
    let l = 0;
    let r = this.nums.length;

    while (l < r) {
      const mid = (l + r) >> 1;
      if (this.nums[mid] > val) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    this.nums.splice(l, 0, val);
    return this.nums[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
