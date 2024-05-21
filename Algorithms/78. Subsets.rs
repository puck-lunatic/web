impl Solution {
    fn dfs(i: usize, temp: &mut Vec<i32>, result: &mut Vec<Vec<i32>>, nums: &Vec<i32>) {
        if i == nums.len() {
            result.push(temp.clone());
            return;
        }
        Self::dfs(i + 1, temp, result, nums);
        temp.push(nums[i]);
        Self::dfs(i + 1, temp, result, nums);
        temp.pop();
    }

    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        Self::dfs(0, &mut Vec::new(), &mut result, &nums);
        result
    }
}
