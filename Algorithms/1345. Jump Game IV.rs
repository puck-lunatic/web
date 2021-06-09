use std::collections::HashMap;
use std::collections::LinkedList;

impl Solution {
    pub fn min_jumps(arr: Vec<i32>) -> i32 {
        let mut visited = vec![false; arr.len()];
        let mut map = Self::create_map(&arr);
        let mut queue: LinkedList<(usize, usize)> = LinkedList::new();

        queue.push_back((0, 0));
        while let Some((idx, time)) = queue.pop_front() {
            if visited[idx] {
                continue;
            }
            visited[idx] = true;

            if idx + 1 == arr.len() {
                return time as i32;
            }

            queue.push_back((idx + 1, time + 1));

            if idx > 0 {
                queue.push_back((idx - 1, time + 1));
            }

            let ref key = arr[idx];
            if map.contains_key(key) {
                for &index in map[key].iter() {
                    queue.push_back((index, time + 1));
                }
                map.remove(key);
            }
        }

        -1
    }
    
    fn create_map(nums: &Vec<i32>) -> HashMap<i32, Vec<usize>> {
        let mut map = HashMap::new();
        for (index, &num) in nums.iter().enumerate() {
            map.entry(num).or_insert(Vec::new()).push(index);
        }
        map
    }   
}
