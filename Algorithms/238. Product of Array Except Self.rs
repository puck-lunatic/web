impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut res: Vec<i32> = vec![1; length];
        
        let mut product = 1;
        for i in 0..length {
            res[i] *= product;
            product *= nums[i];
        }
        
        product = 1;
        for i in (0..length).rev() {
            res[i] *= product;
            product *= nums[i];
        }
        
        res
    }
}
