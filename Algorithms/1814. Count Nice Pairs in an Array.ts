function countNicePairs(nums: number[]): number {
  const rev = (x: number): number => {
    let y = 0;
    while (x > 0) {
      y = y * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return y;
  };
  const MOD = 1_000_000_007;
  const cnt: Map<number, number> = new Map();
  let result = 0;
  for (const x of nums) {
    const key = x - rev(x);
    result = (result + (cnt.get(key) ?? 0)) % MOD;
    cnt.set(key, (cnt.get(key) ?? 0) + 1);
  }
  return result;
}
