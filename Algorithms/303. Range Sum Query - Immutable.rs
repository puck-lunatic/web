struct NumArray {
    accumulated_sums: Vec<i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {

    fn new(mut nums: Vec<i32>) -> Self {
        for i in 1..nums.len() {
            nums[i] += nums[i - 1];
        }
        NumArray { accumulated_sums: nums }  
    }
    
    fn sum_range(&self, i: i32, j: i32) -> i32 {
        let j: usize = j as usize;
        let i: usize = i as usize;
        if i == 0 {
            self.accumulated_sums[j]
        } else {
            self.accumulated_sums[j] - self.accumulated_sums[i - 1]
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray::new(nums);
 * let ret_1: i32 = obj.sum_range(i, j);
 */
 