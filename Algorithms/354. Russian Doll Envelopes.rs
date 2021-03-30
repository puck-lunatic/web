use std::cmp::Reverse;

impl Solution {
    pub fn max_envelopes(mut envelopes: Vec<Vec<i32>>) -> i32 {
        let length = envelopes.len();
        envelopes.sort_unstable_by_key(|v| (v[0], Reverse(v[1])));
        let mut dp = vec![];
        for i in 0..length {
            let height = envelopes[i][1];
            if let Err(p) = dp.binary_search(&height) {
                if p == dp.len() {
                    dp.push(height);
                } else {
                    dp[p] = height;
                }
            }
        }
        dp.len() as i32
    }
}
