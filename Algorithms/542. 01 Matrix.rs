use std::collections::VecDeque;

impl Solution {
    pub fn update_matrix(mut mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = mat.len();
        let m = mat[0].len();
        let mut visited: Vec<Vec<bool>> = vec![vec![false; m]; n];
        let mut queue: VecDeque<(usize, usize, i32)> = VecDeque::new();
        for i in 0..n {
            for j in 0..m {
                if mat[i][j] == 0 {
                    queue.push_back((i, j, 0));
                }
            }
        }
        while let Some((i, j, d)) = queue.pop_front() {
            if visited[i][j] {
                continue;
            }
            visited[i][j] = true;
            mat[i][j] = d;
            if i > 0 {
                queue.push_back((i - 1, j, d + 1));
            }
            if j > 0 {
                queue.push_back((i, j - 1, d + 1));
            }
            if i + 1 < n {
                queue.push_back((i + 1, j, d + 1));
            }
            if j + 1 < m {
                queue.push_back((i, j + 1, d + 1));
            }
        }
        mat
    }
}
