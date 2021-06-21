impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut res = vec![vec![1]];
        if num_rows != 1 {
            res.push(vec![1, 1]);
        }

        if num_rows > 2 {
            for i in 3..=num_rows {
                let mut temp = vec![1];
                for j in 1..=(i-2) {
                    temp.push(res[(i-2) as usize][j as usize] + res[(i-2) as usize][(j -1) as usize]);
                }
                temp.push(1);
                res.push(temp);
            }
        }
        res
    }
}
