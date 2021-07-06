use std::collections::BinaryHeap;
use std::collections::HashMap;

impl Solution {
    pub fn min_set_size(arr: Vec<i32>) -> i32 {
        let length = arr.len();
        let mut hm: HashMap<i32, usize> = HashMap::new();
        for x in arr {
            *hm.entry(x).or_default() += 1;
        }
        let mut pq: BinaryHeap<usize> = BinaryHeap::new();
        for (_, v) in hm {
            pq.push(v);
        }
        let mut sum = 0;
        let mut res = 0;
        while sum * 2 < length {
            sum += pq.pop().unwrap();
            res += 1;
        }
        res
    }
}
