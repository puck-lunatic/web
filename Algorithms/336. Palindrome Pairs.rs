use std::collections::HashMap;
use std::collections::HashSet;

impl Solution {
    pub fn palindrome_pairs(words: Vec<String>) -> Vec<Vec<i32>> {
        let mut id: HashMap<String, usize> = HashMap::new();
        let n = words.len();
        let mut res = HashSet::new();
        for i in 0..n {
            id.insert(words[i].to_string(), i);
        }
        for i in 0..n {
            let k = words[i].len();
            for mid in 0..=k {
                let left: String = words[i][0..mid].to_string();
                let right: String = words[i][mid..].to_string();
                if Self::is_palindrome(&left) {
                    let right_r: String = right.chars().rev().collect();
                    if let Some(&j) = id.get(&right_r) {
                        if i != j {
                            // println!("{}:{}", &left, &right_r);
                            res.insert(vec![j as i32, i as i32]);
                        }
                    }
                }
                if Self::is_palindrome(&right) {
                    let left_r: String = left.chars().rev().collect();
                    if let Some(&j) = id.get(&left_r) {
                        if i != j {
                            // println!("{}:{}", &right, &left_r);
                            res.insert(vec![i as i32, j as i32]);
                        }
                    }
                }
            }
        }
        res.into_iter().collect()
    }
    
    fn is_palindrome(s: &str) -> bool {
        !s.chars().zip(s.chars().rev()).any(|(a, b)| a != b)
    }
}
