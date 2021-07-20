use rand::prelude::*;

struct Solution {
    rng: ThreadRng,
    nums: Vec<i32>,
    n: usize,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(nums: Vec<i32>) -> Self {
        let n = nums.len();
        let rng = thread_rng();
        Solution { rng, nums, n }
    }

    /** Resets the array to its original configuration and return it. */
    fn reset(&self) -> Vec<i32> {
        self.nums.to_vec()
    }

    /** Returns a random shuffling of the array. */
    fn shuffle(&mut self) -> Vec<i32> {
        let mut v = self.nums.to_vec();
        let n = self.n;
        for i in 0..n {
            let j = self.rng.gen_range(i, n);
            v.swap(i, j);
        }
        v
    }
}


/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(nums);
 * let ret_1: Vec<i32> = obj.reset();
 * let ret_2: Vec<i32> = obj.shuffle();
 */
