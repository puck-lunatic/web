function findArray(pref: number[]): number[] {
  const n = pref.length;
  const result = [];
  result.push(pref[0]);
  for (let i = 1; i < n; i++) {
    result.push(pref[i - 1] ^ pref[i]);
  }
  return result;
}
