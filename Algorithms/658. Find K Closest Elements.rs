use std::cmp;

impl Solution {
    pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
        if arr.len() as i32 == k { return arr; }

        let mut res = vec![];
        let length = arr.len() as i32;
        let mut left = 0;
        let mut right = length - 1;
        let mut mid = 0;

        while left <= right {
            mid = (left + right) / 2;
            if arr[mid as usize] > x {
                right = mid - 1;
            } else if arr[mid as usize] < x {
                left = mid + 1;
            } else {
                break;
            }
        }

        left = cmp::max(0, mid - 1);
        right = left + 1;

        while (right - left - 1) < k {
            if left == -1 {
                right += 1;
                continue;
            }

            if right == length || (arr[left as usize] - x).abs() <= (arr[right as usize] - x).abs() {
                left -= 1;
            } else {
                right += 1;
            }
        }

        for i in (left + 1)..right {
            res.push(arr[i as usize]);
        }

        res
    }
}
