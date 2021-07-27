impl Solution {
    pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
        let mut sum = nums[0] + nums[1] + nums[2];
        let length = nums.len();
        for i in 0..(length -2) {
            for j in (i + 1)..(length - 1) {
                for k in (j + 1)..length {
                    let temp = nums[i] + nums[j] + nums[k];
                    if (temp - target).abs() - (sum - target).abs() < 0 {
                        sum = temp;
                    }
                }
            }
        }
        sum
    }
}
