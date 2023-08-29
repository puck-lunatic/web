function bestClosingTime(customers: string): number {
  const n = customers.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = customers.split("").filter((c) => c === "Y").length;
  let min = dp[0];
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (customers[i - 1] === "Y") {
      dp[i] = Math.max(0, dp[i - 1] - 1);
    } else {
      dp[i] = dp[i - 1] + 1;
    }
    if (dp[i] < min) {
      min = dp[i];
      result = i;
    }
  }

  return result;
}
