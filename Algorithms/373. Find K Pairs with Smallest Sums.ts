function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const m = nums1.length;
  const n = nums2.length;
  const result: number[][] = [];
  // brute force will cause "bad_alloc" error
  // for (let i = 0; i < Math.min(m, k); i++) {
  //     for (let j = 0; j < Math.min(n, k); j++) {
  //         result.push([nums1[i], nums2[j]])
  //     }
  // }
  // result.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  const comparator = (a: number[], b: number[]): number => a[0] - b[0];
  const q = new PriorityQueue({
    compare: comparator,
  });
  for (let i = 0; i < Math.min(m, k); i++) {
    q.enqueue([nums1[i] + nums2[0], i, 0]);
  }
  while (!q.isEmpty() && k > 0) {
    const e = q.dequeue();
    result.push([nums1[e[1]], nums2[e[2]]]);
    k -= 1;
    if (e[2] + 1 < nums2.length) {
      q.enqueue([nums1[e[1]] + nums2[e[2] + 1], e[1], e[2] + 1]);
    }
  }
  return result;
}
