use std::cmp;

impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        if height.len() <= 2 { return 0; }
        
        let mut result = 0;
        let mut length = height.len();
        
        let mut max_height_from_left_to_index = vec![];
        let mut max_height_from_right_to_index = vec![];
        
        max_height_from_left_to_index.push(height[0]);
        for i in 1..length {
            max_height_from_left_to_index.push(cmp::max(height[i], max_height_from_left_to_index[i - 1]));
        }
        
        let mut clonedHeight = height.iter().cloned().collect::<Vec<i32>>();
        clonedHeight.reverse();
        max_height_from_right_to_index.push(clonedHeight[0]);
        for i in 1..length {
            max_height_from_right_to_index.push(cmp::max(clonedHeight[i], max_height_from_right_to_index[i - 1]));
        }
        
        // println!("{}, {}, {}", max_height_from_right_to_index[10], max_height_from_right_to_index[11], max_height_from_right_to_index[9]);
        max_height_from_right_to_index.reverse();
        for i in 1..(length - 1) {
            result += cmp::min(max_height_from_left_to_index[i], max_height_from_right_to_index[i]) - height[i];
        }
        
        result
    }
}
