impl Solution {
    pub fn makesquare(mut matchsticks: Vec<i32>) -> bool {
        let n = matchsticks.len();
        if n < 4 {
            return false;
        }
        let sum: i32 = matchsticks.iter().sum();
        if sum % 4 != 0 {
            return false;
        }
        matchsticks.sort_unstable_by_key(|&x| -x);
        let mut sides = vec![0; 4];
        Self::dfs(0, &mut sides, &matchsticks, sum / 4, n)
    }

    fn dfs(start: usize, sides: &mut Vec<i32>, matchsticks: &[i32], sum: i32, n: usize) -> bool {
        if start == n {
            true
        } else {
            for i in 0..4 {
                if sides[i] + matchsticks[start] > sum {
                    continue;
                }
                sides[i] += matchsticks[start];
                if Self::dfs(start + 1, sides, matchsticks, sum, n) {
                    return true;
                }
                sides[i] -= matchsticks[start];
            }
            false
        }
    }
}
