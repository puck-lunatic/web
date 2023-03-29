function maxSatisfaction(satisfaction: number[]): number {
  const sortedSatisfaction = satisfaction.sort((a, b) => a - b);
  const positiveNumber = satisfaction.filter((s) => s >= 0).length;
  const length = satisfaction.length;
  let result = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= length - positiveNumber; i++) {
    const slice = sortedSatisfaction.slice(i);
    const sum = slice.reduce((pre, cur, i) => pre + cur * (i + 1), 0);
    result = Math.max(result, sum);
  }
  return result > 0 ? result : 0;
}
