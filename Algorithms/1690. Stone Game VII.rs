impl Solution {
    pub fn stone_game_vii(stones: Vec<i32>) -> i32 {
        let n = stones.len();
        let mut memo: Vec<Vec<i32>> = vec![vec![0; n]; n];
        let sum = stones.iter().sum();
        Self::dp(0, n - 1, &mut memo, &stones, sum)
    }

    fn dp(l: usize, r: usize, memo: &mut Vec<Vec<i32>>, stones: &[i32], sum: i32) -> i32 {
        if l == r {
            0
        } else {
            if memo[l][r] != 0 {
                memo[l][r]
            } else {
                let mut res = 0;
                res = res.max(sum - stones[l] - Self::dp(l + 1, r, memo, stones, sum - stones[l]));
                res = res.max(sum - stones[r] - Self::dp(l, r - 1, memo, stones, sum - stones[r]));
                memo[l][r] = res;
                res
            }
        }
    }
}
