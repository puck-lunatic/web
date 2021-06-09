use std::collections::VecDeque;

impl Solution {
    pub fn max_result(nums: Vec<i32>, k: i32) -> i32 {
        let length = nums.len();
        let span = k as usize;
        let mut queue: VecDeque<(usize, i32)> = VecDeque::new();
        queue.push_back((0, nums[0]));
        for i in 1..length {
            while let Some((j, _)) = queue.front() {
                if j + span < i {
                    queue.pop_front();
                } else {
                    break;
                }
            }
            let max = queue.front().as_ref().unwrap().1 + nums[i];
            while let Some(&(_, sum)) = queue.back() {
                if sum < max {
                    queue.pop_back();
                } else {
                    break;
                }
            }
            queue.push_back((i, max));
        }
        queue.back().as_ref().unwrap().1
    }
}
