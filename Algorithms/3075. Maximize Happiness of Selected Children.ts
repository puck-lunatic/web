function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < k; i++) {
    const x = happiness[i] - i;
    result += Math.max(x, 0);
  }
  return result;
}
