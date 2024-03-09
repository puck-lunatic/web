function getCommon(nums1: number[], nums2: number[]): number {
  // for (const num of nums1) {
  //     if (nums2.includes(num)) {
  //         return num;
  //     }
  // }
  while (nums1.length !== 0 && nums2.length !== 0) {
    if (nums1[0] === nums2[0]) {
      return nums1[0];
    } else if (nums1[0] > nums2[0]) {
      nums2.shift();
    } else {
      nums1.shift();
    }
  }

  return -1;
}
