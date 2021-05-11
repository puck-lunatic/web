impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let length = card_points.len();
        let mut sum: i32 = card_points.iter().take(k).sum();
        let mut res = sum;
        for i in 0..k {
            sum -= card_points[k - 1 - i];
            sum += card_points[length - 1 - i];
            res = res.max(sum);
        }
        res
    }
}
