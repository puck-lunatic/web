impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len() as i32;
        let mut nums = nums;
        nums.sort();
        let mut res: Vec<i32> = Vec::new();
        nums.windows(2).for_each(|x| { 
            if x[0] == x[1] {
                res.push(x[0]);
            }
        });

        // let hs = nums.iter().collect::<HashSet<i32>>();
        for i in (1..length + 1) {
            if !nums.contains(&i) {
                res.push(i);
            }
        }
        
        res
    }
}
