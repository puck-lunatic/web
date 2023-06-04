impl Solution {
    pub fn find_circle_num(mut is_connected: Vec<Vec<i32>>) -> i32 {
        let n = is_connected.len();
        let mut visited = vec![false; n];
        let mut result = 0;
        for i in 0..n {
            if visited[i] {
                continue;
            }
            result += 1;
            Self::dfs(&mut is_connected, &mut visited, i);
        }
        result
    }

    fn dfs(is_connected: &mut Vec<Vec<i32>>, visited: &mut Vec<bool>, i: usize) {
        visited[i] = true;
        for j in 0..is_connected.len() {
            if visited[j] || is_connected[i][j] == 0 {
                continue;
            }
            Self::dfs(is_connected, visited, j);
        }
    }
}
