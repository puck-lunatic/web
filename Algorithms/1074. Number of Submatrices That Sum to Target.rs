impl Solution {
    pub fn num_submatrix_sum_target(matrix: Vec<Vec<i32>>, target: i32) -> i32 {
        let n = matrix.len();
        let m = matrix[0].len();
        let mut prefix = vec![vec![]; n];
        for i in 0..n {
            let mut prev = 0;
            for j in 0..m {
                prev += matrix[i][j];
                prefix[i].push(prev);
            }
        }
        
        let mut res = 0;
        for j1 in 0..m {
            for j2 in j1..m {
                let mut hm: HashMap<i32, usize> = HashMap::new();
                hm.insert(0, 1);
                let mut sum = 0;
                for i in 0..n {
                    let cur = if j1 == 0 {
                        prefix[i][j2]
                    } else {
                        prefix[i][j2] - prefix[i][j1 - 1]
                    };
                    sum += cur;
                    res += *hm.entry(sum - target).or_default();
                    *hm.entry(sum).or_default() += 1;
                }
            }
        }
        res as i32
    }
}
