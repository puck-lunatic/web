function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const mid = ((m + n) >> 1) + 1;
  let d1 = nums1.shift();
  let d2 = nums2.shift();

  let count = 0;
  const result: number[] = [];
  while (true) {
    if ((d1 === undefined && d2 === undefined) || count === mid) {
      break;
    }
    if (d1 === undefined) {
      result.push(d2);
      d2 = nums2.shift();
      count += 1;
      continue;
    }

    if (d2 === undefined) {
      result.push(d1);
      d1 = nums1.shift();
      count += 1;
      continue;
    }
    if (d1 < d2) {
      result.push(d1);
      d1 = nums1.shift();
    } else {
      result.push(d2);
      d2 = nums2.shift();
    }

    count += 1;
  }
  // console.log(result);
  // console.log((nums1.length + nums2.length));
  // console.log((nums1.length + nums2.length) % 2 === 0);
  return (m + n) % 2 === 0
    ? (result[count - 2] + result[count - 1]) / 2
    : result[count - 1];
}
