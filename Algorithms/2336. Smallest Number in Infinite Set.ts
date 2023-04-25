class SmallestInfiniteSet {
  private array: boolean[];
  constructor() {
    this.array = new Array(1001).fill(true);
  }

  popSmallest(): number {
    for (let i = 1; i <= 1001; i++) {
      if (this.array[i]) {
        this.array[i] = false;
        return i;
      }
    }
    // unreachable
    return -1;
  }

  addBack(num: number): void {
    if (!this.array[num]) {
      this.array[num] = true;
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
