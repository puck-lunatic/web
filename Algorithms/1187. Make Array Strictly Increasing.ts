function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
  arr2.sort((a, b) => a - b);
  let m = 0;
  for (const x of arr2) {
    if (m === 0 || x !== arr2[m - 1]) {
      arr2[m++] = x;
    }
  }
  arr2 = arr2.slice(0, m);
  arr1 = [Number.NEGATIVE_INFINITY, ...arr1, Number.POSITIVE_INFINITY];
  const n = arr1.length;
  const dp: number[] = new Array(n).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;
  const bs = (arr: number[], x: number): number => {
    let l = 0;
    let r = arr.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (arr[mid] >= x) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };
  for (let i = 1; i < n; i++) {
    if (arr1[i - 1] < arr1[i]) {
      dp[i] = dp[i - 1];
    }
    const j = bs(arr2, arr1[i]);
    for (let k = 1; k <= Math.min(i - 1, j); k++) {
      if (arr1[i - k - 1] < arr2[j - k]) {
        dp[i] = Math.min(dp[i], dp[i - k - 1] + k);
      }
    }
  }
  return dp[n - 1] >= Number.POSITIVE_INFINITY ? -1 : dp[n - 1];
}
