impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() == 0 { return 0;}
        if nums.len() == 1 { return 1;}
        
        let mut index = 1;
        while index < nums.len() {
            if nums[index] == nums[index - 1] {
                nums.remove(index);
            }else{
                index += 1;
            }
        }
        
        nums.len() as i32
    }
}
