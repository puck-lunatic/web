impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut i = 0;
        while i < nums.len() {
            if nums[i] == target { break; }
            else { i += 1; }
        }
        
        if i == nums.len() { return -1; }
        i as i32
    }
}
