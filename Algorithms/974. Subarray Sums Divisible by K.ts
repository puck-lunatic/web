function subarraysDivByK(nums: number[], k: number): number {
  const hm: Map<number, number> = new Map();
  hm.set(0, 1);
  let sum = 0;
  let result = 0;
  for (const num of nums) {
    sum += num;
    const t = ((sum % k) + k) % k;
    result += hm.get(t) || 0;
    hm.set(t, (hm.get(t) || 0) + 1);
  }
  return result;
}
