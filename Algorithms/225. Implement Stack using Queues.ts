class MyStack {
  constructor() {
    this.q = [];
  }

  private q: number[];

  push(x: number): void {
    this.q.unshift(x);
  }

  pop(): number {
    return this.q.shift();
  }

  top(): number {
    return this.q[0];
  }

  empty(): boolean {
    return this.q.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
