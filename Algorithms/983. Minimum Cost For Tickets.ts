function mincostTickets(days: number[], costs: number[]): number {
  const max: number = days[days.length - 1] + 1;
  const dp: number[] = new Array(max).fill(0);
  for (let i = 1; i < max; i++) {
    const one: number = days.includes(i) ? dp[i - 1] + costs[0] : dp[i - 1];
    const seven: number = (i > 7 ? dp[i - 7] : dp[0]) + costs[1];
    const thirty: number = (i > 30 ? dp[i - 30] : dp[0]) + costs[2];
    dp[i] = Math.min(one, seven, thirty);
  }
  return dp[max - 1];
}
