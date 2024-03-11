function customSortString(order: string, s: string): string {
  const chars = order.split("");
  const result = s.split("");
  result.sort(
    (a, b) => chars.findIndex((e) => e === b) - chars.findIndex((e) => e === a)
  );
  return result.reverse().join("");
}
