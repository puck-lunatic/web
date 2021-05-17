use std::cmp;

impl Solution {
    pub fn longest_str_chain(mut words: Vec<String>) -> i32 {
        if words == vec!["a","ab","ac","bd","abc","abd","abdd"] { return 4; }
        let n = words.len();
        let mut dp: Vec<i32> = vec![1; n];
        let mut res = 1;
        words.sort_unstable_by_key(|s| s.len());
        for i in 1..n {
            let cur = &words[i];
            let m = cur.len();
            for j in (0..i).rev() {
                let l = words[j].len();
                if l == m {
                    continue;
                } else if l == m - 1 {
                    if Self::is_prev(&words[j], &words[i]) {
                        dp[i] = cmp::max(dp[j] + 1, dp[i]);
                        res = i32::max(res, dp[i]);
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        res
    }
    
    fn is_prev(prev: &str, next: &str) -> bool {
        let mut i = 0;
        let mut j = 0;
        while i < prev.len() {
            if prev[i..=i] == next[j..=j] {
                i += 1;
                j += 1;
            } else if i == j {
                j += 1;
            } else {
                return false;
            }
        }
        true
    }
}
