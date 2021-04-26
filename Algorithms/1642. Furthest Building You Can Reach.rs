use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn furthest_building(heights: Vec<i32>, bricks: i32, ladders: i32) -> i32 {
        let n = heights.len();
        let mut ladders = ladders;
        let mut bricks = bricks;
        
        let mut replacement: BinaryHeap<Reverse<i32>> = BinaryHeap::new();
        for i in 1..n {
            if heights[i - 1] < heights[i] {
                replacement.push(Reverse(heights[i] - heights[i - 1]));
                if ladders > 0 {
                    ladders -= 1;
                } else {
                    let min = replacement.pop().unwrap().0;
                    if min <= bricks {
                        bricks -= min;
                    } else {
                        return (i - 1) as i32;
                    }
                }
            }
        }
        (n - 1) as i32
    }
}
