use std::collections::BinaryHeap;

impl Solution {
    pub fn is_possible(target: Vec<i32>) -> bool {
        let mut sum: i64 = 0;
        let mut heap = BinaryHeap::<i32>::new();

        for x in target {
            heap.push(x);
            sum += x as i64;
        }

        while let Some(mut x) = heap.pop() {
            sum -= x as i64;
            if x == 1 || sum == 1 {
                return true;
            }

            if (x as i64) < sum || sum == 0 || (x as i64) % sum == 0 {
                return false;
            }
            x = ((x as i64) % sum) as i32;
            sum += x as i64;
            heap.push(x);
        }

        false
    }
}
