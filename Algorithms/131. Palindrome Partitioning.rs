impl Solution {
    pub fn partition(s: String) -> Vec<Vec<String>> {
        let mut result: Vec<Vec<String>> = vec![];
        let s: Vec<char> = s.chars().collect();
        let length = s.len();
        let mut indexes: Vec<(usize, usize)> = vec![];
        Self::dfs(0, &mut indexes, &mut result, &s, length);
        result
    }
    
    fn dfs(start: usize, indexes: &mut Vec<(usize, usize)>, result: &mut Vec<Vec<String>>, s: &[char], length: usize) {
        if start == length {
            let mut partition: Vec<String> = vec![];
            for &(l, r) in indexes.iter() {
                partition.push(s[l..r].iter().collect());
            }
            result.push(partition);
        }
        
        for end in start + 1..=length {
            if Self::is_palindrome(&s[start..end]) {
                indexes.push((start, end));
                Self::dfs(end, indexes, result, s, length);
                indexes.pop();
            }
        }
    }
    
    fn is_palindrome(s: &[char]) -> bool {
        let n = s.len();
        for i in 0..n {
            let j = n - 1 - i;
            if s[i] != s[j] {
                return false;
            }
        }
        true
    }
}
