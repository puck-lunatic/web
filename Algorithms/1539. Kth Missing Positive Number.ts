function findKthPositive(arr: number[], k: number): number {
  if (arr[0] > k) {
    return k;
  }
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] - mid - 1 >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1);
}
