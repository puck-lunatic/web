use std::cmp::Reverse;
use std::collections::BinaryHeap;

const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn max_performance(n: i32, speed: Vec<i32>, efficiency: Vec<i32>, k: i32) -> i32 {
        let n = n as usize;
        let k = k as usize;
        let mut max_efficiency: BinaryHeap<(i32, i32)> = BinaryHeap::new();
        for i in 0..n {
            max_efficiency.push((efficiency[i], speed[i]));
        }
        let mut min_speed: BinaryHeap<Reverse<i32>> = BinaryHeap::new();
        let mut sum_speed = 0;
        let mut res = 0;
        while let Some((e, s)) = max_efficiency.pop() {
            sum_speed += s as i64;
            min_speed.push(Reverse(s));
            if min_speed.len() > k {
                sum_speed -= min_speed.pop().unwrap().0 as i64;
            }
            res = res.max(sum_speed as i64 * e as i64);
        }
        (res % MOD) as i32
    }
}
