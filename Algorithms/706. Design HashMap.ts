class MyHashMap {
  private hs = {};
  constructor() {}

  put(key: number, value: number): void {
    this.hs[key] = value;
  }

  get(key: number): number {
    if (this.hs[key] !== undefined) {
      return this.hs[key];
    }
    return -1;
  }

  remove(key: number): void {
    delete this.hs[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
