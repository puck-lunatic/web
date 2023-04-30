function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  const alice = new UnionFind(n);
  const bob = new UnionFind(n);
  let removable = 0;

  edges.sort((a, b) => b[0] - a[0]);

  for (const [type, from, to] of edges) {
    if (type === 3) {
      if (alice.connected(from, to) && bob.connected(from, to)) {
        removable++;
      } else {
        alice.union(from, to);
        bob.union(from, to);
      }
    } else if (type === 2) {
      if (bob.connected(from, to)) removable++;
      else bob.union(from, to);
    } else if (type === 1) {
      if (alice.connected(from, to)) removable++;
      else alice.union(from, to);
    }
  }

  for (let i = 2; i <= n; i++) {
    if (!alice.connected(1, i) || !bob.connected(1, i)) return -1;
  }

  return removable;
}

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.rank = new Array(size).fill(1);
    this.parent = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  find(n: number): number {
    if (this.parent[n] !== n) {
      this.parent[n] = this.find(this.parent[n]);
    }

    return this.parent[n];
  }

  union(a: number, b: number): void {
    const p1 = this.find(a),
      p2 = this.find(b);

    if (p1 === p2) return;

    if (this.rank[p1] > this.rank[p2]) this.parent[p2] = p1;
    else if (this.rank[p1] < this.rank[p2]) this.parent[p1] = p2;
    else {
      this.parent[p2] = p1;
      this.rank[p1]++;
    }
  }

  connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }
}
