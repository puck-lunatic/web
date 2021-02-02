impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
            let mut i = 0;

            while i < nums.len() {
                if nums[i] == val {
                    nums.remove(i);
                }else{
                    i += 1;    
                }
                
            }
            nums.len() as i32
    }
}
