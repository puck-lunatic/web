impl Solution {
    pub fn is_power_of_three(n: i32) -> bool {
        let mut n: i32 = n;
        if (n < 1) {
            return false;
        }

        while (n % 3) == 0 {
            n /= 3;
        }

        n == 1
    }
}
