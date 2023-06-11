class SnapshotArray {
  private snapId: number;
  private hm: Map<number, Map<number, number>>;
  constructor(length: number) {
    this.snapId = 0;
    this.hm = new Map();
  }

  set(index: number, val: number): void {
    if (!this.hm.has(this.snapId)) {
      this.hm.set(this.snapId, new Map());
    }
    const currentSnap = this.hm.get(this.snapId);
    currentSnap.set(index, val);
  }

  snap(): number {
    this.snapId += 1;
    return this.snapId - 1;
  }

  get(index: number, snap_id: number): number {
    while (snap_id >= 0) {
      const snap = this.hm.get(snap_id);
      if (snap) {
        const item = snap.get(index);
        if (item !== undefined) {
          return item;
        }
      }
      snap_id -= 1;
    }
    return 0;
  }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
