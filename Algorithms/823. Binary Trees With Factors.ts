function numFactoredBinaryTrees(arr: number[]): number {
  // let mut a: Vec<i32> = arr;
  const n = arr.length;
  const dp = new Array(n).fill(1);
  const MOD = 1_000_000_007;
  const hm: Map<number, number> = new Map();
  arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < n; i++) {
    hm.set(arr[i], i);
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        if (hm.has(arr[i] / arr[j])) {
          const k = hm.get(arr[i] / arr[j]);
          dp[i] += dp[j] * dp[k];
        }
      }
    }
    result = (result + dp[i]) % MOD;
  }
  return result;
}
