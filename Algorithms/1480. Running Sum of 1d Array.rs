impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut res = vec![0; length];
        res[0] = nums[0];
        if length == 1 {
            return res;
        }
        
        for i in 1..length {
            res[i] = res[i - 1] + nums[i];
        }
        
        res
    }
}
