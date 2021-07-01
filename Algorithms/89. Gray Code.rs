impl Solution {
    pub fn gray_code(n: i32) -> Vec<i32> {
        let mut res = vec![];
        for i in 0..(1 << n) {
            res.push(i ^ i >> 1);
        }
        res
    }
}
