impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> bool {
        let mut i = 0;
        while i < nums.len() {
            if nums[i] == target {
                break;
            } else {
                i += 1;
            }
        }

        if i == nums.len() {
            return false;
        }
        true
    }
}
