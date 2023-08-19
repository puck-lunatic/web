function kruskalAlgo(
  n: number,
  edges: number[][],
  excluded: number[] | null = null,
  included: number[] | null = null
) {
  let minCost = 0;
  const uf = new UnionFind(n);
  if (included) {
    const [start, end, weight] = included;
    uf.union(start, end);
    minCost += weight;
  }

  for (let edge of edges) {
    if (edge === excluded) {
      continue;
    }
    const [start, end, weight] = edge;
    if (uf.union(start, end)) {
      minCost += weight;
    }
  }

  return minCost;
}

function findCriticalAndPseudoCriticalEdges(
  n: number,
  edges: number[][]
): number[][] {
  const map = new Map<number[], number>();
  const critical: number[] = [];
  const pseudoCritical: number[] = [];
  edges.forEach((edge, i) => map.set(edge, i));
  edges.sort((a, b) => a[2] - b[2]);
  let minCost = kruskalAlgo(n, edges);

  for (let edge of edges) {
    const index = map.get(edge)!;
    if (kruskalAlgo(n, edges, edge) !== minCost) {
      critical.push(index);
    } else if (kruskalAlgo(n, edges, null, edge) === minCost) {
      pseudoCritical.push(index);
    }
  }

  return [critical, pseudoCritical];
}

class UnionFind {
  private parent: number[];
  private count: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = new Array(n).fill(1);
  }

  public find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  public union(x: number, y: number): boolean {
    const xp = this.find(x);
    const yp = this.find(y);
    if (xp === yp) {
      return false;
    }

    if (this.count[xp] < this.count[yp]) {
      this.parent[xp] = yp;
      this.count[yp] += this.count[xp];
    } else {
      this.parent[yp] = xp;
      this.count[xp] += this.count[yp];
    }

    return true;
  }
}
