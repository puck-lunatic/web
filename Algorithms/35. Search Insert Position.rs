impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut i = 0;
        if target < nums[0] { return 0; }
        while i < nums.len() {
            if nums[i] == target { return i as i32;}
            if i < nums.len() -1 && nums[i + 1] > target { return (i + 1)  as i32;}
            i += 1;
        }
        i  as i32
    }
}
