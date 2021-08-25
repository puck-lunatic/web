impl Solution {
    pub fn judge_square_sum(c: i32) -> bool {
        if c == 0 {
            return true;
        }
        let x = (c as f64).sqrt() as i32;
        for i in 0..=x {
            let temp = c - i * i;
            let test = (temp as f64).sqrt() as i32;
            if temp == test * test {
                return true;
            }
        }
        false
    }
}
