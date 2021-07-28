impl Solution {
    pub fn beautiful_array(n: i32) -> Vec<i32> {
        if n == 1 {
            vec![1]
        } else {
            let left = Self::beautiful_array(n / 2);
            let right = Self::beautiful_array((n + 1) / 2);
            left.into_iter()
                .map(|x| x * 2)
                .chain(right.into_iter().map(|x| x * 2 - 1))
                .collect()
        }
    }
}
