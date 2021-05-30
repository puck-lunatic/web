// TODO: improve the algorithm by using "Bucket Sort"
impl Solution {
    pub fn maximum_gap(mut nums: Vec<i32>) -> i32 {
        let length = nums.len();
        if length < 2 { return 0;  }
        
        nums.sort_unstable();
        let mut res = 0;
        for i in 1..length {
            res = res.max(nums[i] - nums[i - 1]);
        }
        res
    }
}
