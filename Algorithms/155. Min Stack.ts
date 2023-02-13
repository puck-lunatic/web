class MinStack {
  private stack: number[];
  private mins: number[];
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.mins.push(Math.min(this.getMin(), val));
  }

  pop(): void {
    this.stack.pop();
    this.mins.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.mins.length === 0 ? Infinity : this.mins[this.mins.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
