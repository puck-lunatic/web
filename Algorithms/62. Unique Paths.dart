class Solution {
  int uniquePaths(int m, int n) {
    List<List<int>> dp = new List.generate(m, (_) => new List.generate(n, (_) => 1));
    for (var i = 1; i < m; i++) {
      for (var j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[m - 1][n - 1];
  }
}