impl Solution {
    pub fn min_flips_mono_incr(s: String) -> i32 {
        let mut chars = s.chars().collect::<Vec<char>>();
        let mut left = vec![0; chars.len()];
        let mut one_count = 0;
        let mut right = vec![0; chars.len()];
        let mut zero_count = 0;
        for i in 0..chars.len() {
            left[i] = one_count;
            if chars[i] == '1' {
                one_count += 1;
            }
        }
        for i in (0..chars.len()).rev() {
            right[i] = zero_count;
            if chars[i] == '0' {
                zero_count += 1;
            }
        }
        let mut res = std::i32::MAX;
        for i in 0..chars.len() {
            res = res.min(left[i] + right[i]);
        }
        res
    }
}
