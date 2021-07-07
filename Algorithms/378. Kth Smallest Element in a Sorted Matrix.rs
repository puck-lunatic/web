use std::collections::BinaryHeap;

impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        let mut pq: BinaryHeap<i32> = BinaryHeap::new();
        for row in matrix {
            for x in row {
                pq.push(x);
                if pq.len() > k as usize {
                    pq.pop();
                }
            }
        }
        pq.pop().unwrap()
    }
}
