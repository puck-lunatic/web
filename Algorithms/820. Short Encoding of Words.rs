use std::collections::HashSet;

impl Solution {
    pub fn minimum_length_encoding(words: Vec<String>) -> i32 {
        let mut uncompressions: HashSet<String> = words.clone().into_iter().collect();
        
        words.iter().for_each(|w| {
            for i in 1..w.len() {
                unsafe {
                    let sub = w.get_unchecked(i..w.len());
                    uncompressions.remove(sub);
                }
            }
        });
        
        uncompressions.iter().fold(0, |acc, x| { acc + x.len() as i32 + 1 })
    }
}
