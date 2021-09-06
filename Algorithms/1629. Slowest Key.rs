impl Solution {
    pub fn slowest_key(release_times: Vec<i32>, keys_pressed: String) -> char {
        let chars: Vec<char> = keys_pressed.chars().collect();
        let mut res = chars[0];
        let mut maxReleaseTime = release_times[0];
        for i in 1..release_times.len() {
            let temp = release_times[i] - release_times[i - 1];
            if temp == maxReleaseTime {
                if chars[i] > res {
                    res = chars[i];
                }
            } else if temp > maxReleaseTime {
                maxReleaseTime = temp;
                res = chars[i];
            }
        }
        res
    }
}
