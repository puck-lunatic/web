impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        if nums.is_empty() {
            return vec![-1, -1];
        }

        let mut size = nums.len();

        let mut base = 0usize;
        while size > 1 {
            let half = size / 2;
            let mid = base + half;
            if nums[mid] <= target {
                base = mid;
            }
            size -= half;
        }
        if nums[base] == target {
            let mut start = base;
            while start > 0 && nums[start-1] == target {
                start -= 1;
            }
            let mut end = base;
            while end < nums.len() - 1 && nums[end+1] == target {
                end += 1;
            }
            return vec![start as i32, end as i32];
        }
        vec![-1, -1]
//         if nums.len() == 0 { return vec![-1, -1]}
//         if nums.len() == 1 {
//             if nums[0] == target { return vec![0, 0]}
//             else { return vec![-1, -1]}
//         }
//         if nums.len() == 2 {
//             if nums[0] == target && nums[1] == target { return vec![0, 1];}
//             if nums[0] == target && nums[1] != target { return vec![0, 0];}
//             if nums[0] != target && nums[1] == target { return vec![1, 1];}
//             return vec![-1, -1];
//         }
        
//         if nums[0] == target {
//             if nums[1] == target { return vec![0, 1];}
//             else  { return vec![0, 0];}
//         }
        
//         let mut start = 0;
//         let mut end = nums.len();
//         let mut middle;
        
//         while end - start > 1 {
//             middle = ((end + start) / 2) as usize;
//             if nums[middle] == target {
//                 if middle + 1 < nums.len() && nums[middle + 1] == target { return vec![middle as i32, (middle + 1) as i32]; }
//                 if middle - 1 >= 0 && nums[middle - 1] == target  { return vec![(middle - 1) as i32, middle as i32]; }
//                 return vec![middle as i32, middle as i32];
//             } else if nums[middle] < target {
//                 start = middle;
//             } else {
//                 end = middle;
//             }
            
//         }
        
//         vec![-1, -1]
    }
}
