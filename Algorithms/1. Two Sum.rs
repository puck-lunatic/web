impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut l = -1;
        let mut r = -1;
        for i in 0..nums.len() {
            for k in (i+1)..nums.len() {
                if nums[i] + nums[k] == target {
                    l = i as i32;
                    r = k as i32;
                    break;
                }
            }
            if l != -1 && r != -1 {
                break;
            }
        }
        vec![l, r]
    }
}
