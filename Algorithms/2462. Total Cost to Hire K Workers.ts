interface Pair<T, U> {
  first: T;
  second: U;
}

function totalCost(costs: number[], k: number, candidates: number): number {
  type Entity = Pair<number, number>;
  const comparator = (a: Entity, b: Entity): number => {
    if (a.first === b.first) {
      return a.second - b.second;
    }
    return a.first - b.first;
  };
  const q = new MinPriorityQueue({
    compare: comparator,
  });
  const n = costs.length;
  let i = candidates - 1,
    j = n - candidates;
  for (let h = 0; h < candidates; h++) {
    q.enqueue({ first: costs[h], second: h });
  }
  for (let h = n - candidates; h < n; h++) {
    if (h > i) {
      q.enqueue({ first: costs[h], second: h });
    }
  }
  let result = 0;
  while (k-- > 0) {
    const e = q.dequeue();
    const c = e.first,
      x = e.second;
    result += c;
    if (x <= i) {
      if (++i < j) {
        q.enqueue({ first: costs[i], second: i });
      }
    }
    if (x >= j) {
      if (--j > i) {
        q.enqueue({ first: costs[j], second: j });
      }
    }
  }
  return result;
}
