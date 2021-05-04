impl Solution {
    pub fn check_possibility(mut nums: Vec<i32>) -> bool {
        if nums.len() < 3 { return true; }
        
        let mut count = 1;
        if nums[0] > nums[1] {
            nums[0] = nums[1];
            count-=1;
        }
        
        for i in 1..(nums.len() - 1) {
            let right = nums[i+1];
            if nums[i] > right {
                count-=1;
                if count < 0 { return false; }
                
                let left = nums[i-1];
                if left > right {
                    nums[i+1] = nums[i];
                } else {
                    nums[i] = left;
                }
            }
        }
        
        true
    }
}
