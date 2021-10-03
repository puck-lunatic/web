use std::cmp;

impl Solution {
    pub fn calculate_minimum_hp(dungeon: Vec<Vec<i32>>) -> i32 {
        let n = dungeon.len();
        let m = dungeon[0].len();
        let mut dp = vec![vec![0; m]; n];
//         if m == 1 && n == 1{
//             if dungeon[0][0] >= 0 {
//                 return 1;
//             } else {
//                 return -dungeon[0][0] + 1;
//             }
//         }
//         let mut current = dungeon[0][0];
//         dp[0][0] = if dungeon[0][0] < 0 {
//             dungeon[0][0]
//         } else {
//             0
//         };

//         for i in 1..m {
//             current += dungeon[i][0];
//             // compare the pre step and accumulation
//             dp[i][0] = cmp::min(dp[i - 1][0], current);
//         }

//         // reset
//         current = dungeon[0][0];

//         for i in 1..n {
//             current += dungeon[0][i];
//             // compare the pre step and accumulation
//             dp[0][i] = cmp::min(dp[0][i - 1], current);
//         }

//         for i in 1..m {
//             // reset
//             current = 0;
//             for j in 1..n {
//                 current += dungeon[i][j];
//                 let temp = cmp::max(dp[i -1][j], dp[i][j - 1])  + dungeon[i][j];
//                 dp[i][j] = if current > 0 {
//                     cmp::max(dp[i -1][j], dp[i][j - 1])
//                 } else {
//                     cmp::max(dp[i -1][j], dp[i][j - 1]) + current
//                 };
//             }
//         }
        
//         if dp[m -1][n -1] < 0 {
//             return -dp[m -1][n -1] + 1;
//         }
//         dp[m -1][n -1] + 1

        for i in (0..n).rev() {
            for j in (0..m).rev() {
                if i + 1 < n && j + 1 < m {
                    dp[i][j] = 1.max(-dungeon[i][j] + dp[i + 1][j].min(dp[i][j + 1]));
                    continue;
                }
                if i + 1 < n {
                    dp[i][j] = 1.max(-dungeon[i][j] + dp[i + 1][j]);
                    continue;
                }
                if j + 1 < m {
                    dp[i][j] = 1.max(-dungeon[i][j] + dp[i][j + 1]);
                    continue;
                }
                dp[i][j] = 1.max(-dungeon[i][j] + 1);
            }
        }

        dp[0][0]
    }
}
