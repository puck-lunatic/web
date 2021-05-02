use std::collections::BinaryHeap;


impl Solution {
    pub fn schedule_course(mut courses: Vec<Vec<i32>>) -> i32 {
        courses.sort_by_key(|x| x[1]);
        let mut sum = 0;
        let mut queue: BinaryHeap<i32> = BinaryHeap::new();
        for c in courses {
            sum += c[0];
            queue.push(c[0]);
            if sum > c[1] {
                sum -= queue.pop().unwrap();
            }
        }
        queue.len() as i32
    }
}
