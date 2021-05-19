impl Solution {
    pub fn min_moves2(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        let n = nums.len();
        let median = nums[n / 2];
        nums.into_iter().map(|x| (x - median).abs()).sum()
    }
}
