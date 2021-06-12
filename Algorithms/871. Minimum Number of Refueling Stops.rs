use std::cmp;

impl Solution {
    pub fn min_refuel_stops(target: i32, start_fuel: i32, stations: Vec<Vec<i32>>) -> i32 {
        let length = stations.len();
        let mut dp = vec![0; length + 1];
        dp[0] = start_fuel;

        for i in 0..length {
            for t in (0..=i).rev() {
                if (dp[t] >= stations[i][0]) {
                    dp[t+1] = cmp::max(dp[t+1], dp[t] + stations[i][1]);
                }
            }
        }

        for i in 0..=length {
            if dp[i] >= target { return i as i32 ; }
        }

        -1
    }
}
