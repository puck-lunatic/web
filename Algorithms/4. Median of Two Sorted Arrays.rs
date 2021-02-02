use std::cmp::Ordering;
use std::i32::MAX;

impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let mid = (nums1.len() + nums2.len()) / 2 + 1;
        let mut d1_iter = nums1.iter();
        let mut d2_iter = nums2.iter();
        let mut d1 = d1_iter.next().unwrap_or(&MAX);
        let mut d2 = d2_iter.next().unwrap_or(&MAX);
        
        let mut count = 0;
        let mut result = Vec::<i32>::new();
        loop {
            if (d1 == &MAX && d2 == &MAX) || count == mid {
                break;
            }
            match d1.cmp(&d2) {
                Ordering::Less => {
                    result.push(*d1);
                    d1 = d1_iter.next().unwrap_or(&MAX);
                }
                Ordering::Greater | Ordering::Equal => {
                    result.push(*d2);
                    d2 = d2_iter.next().unwrap_or(&MAX);
                }
            }
            count += 1;
        }
        // let left = mid - 1;
        // let right = mid;
        match (nums1.len() + nums2.len()) % 2 {
            0 => (result[count - 2] + result[count - 1]) as f64 / 2.0,
            _ => result[count - 1] as f64,
        }
    }
}
