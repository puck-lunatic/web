interface pair<T, U> {
  first: T;
  second: U;
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
  type number2 = pair<number, number>;
  function comparator(a: number2, b: number2): number {
    if (a.first === b.first) {
      return a.second - b.second;
    }
    return b.first - a.first;
  }
  const n: number = nums1.length;
  const p: number2[] = new Array(n);
  const pq = new MinPriorityQueue();
  let result: number = 0,
    sum: number = 0;
  for (let i = 0; i < n; i++) {
    p[i] = { first: nums2[i], second: nums1[i] };
  }
  p.sort(comparator);
  for (let i = 0; i < n; i++) {
    const { first: a, second: b } = p[i];
    sum += b;
    pq.enqueue(b);
    if (i < k - 1) {
      continue;
    }
    if (pq.size() > k) {
      sum -= pq.dequeue().element;
    }
    result = Math.max(result, sum * a);
  }
  return result;
}
