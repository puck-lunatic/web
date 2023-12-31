function maxLengthBetweenEqualCharacters(s: string): number {
  const chars = s.split("");
  const obj = {};
  chars.forEach((c, i) => {
    obj[c] = obj[c] ?? [];
    obj[c].push(i);
  });
  let result = -1;
  const arrs = Object.values(obj).filter(
    (e) => (e as Array<number>).length > 1
  );
  arrs.forEach((arr) => {
    const n = (arr as number[]).length;
    result = Math.max(result, arr[n - 1] - arr[0] - 1);
  });
  return result;
}
