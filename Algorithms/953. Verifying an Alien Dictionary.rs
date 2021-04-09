impl Solution {
    pub fn is_alien_sorted(words: Vec<String>, order: String) -> bool {
        let mut mapping: Vec<char> = vec![0 as char; 256];
        for (i, c) in order.chars().enumerate() {
            mapping[c as usize] = (i as u8 + b'a') as char;
        }
        let words: Vec<String> = words
            .into_iter()
            .map(|s| Self::translate(s, &mapping))
            .collect();
        let mut sorted: Vec<String> = words.to_vec();
        sorted.sort();
        words == sorted
    }
    
    fn translate(s: String, mapping: &[char]) -> String {
        s.chars().map(|c| mapping[c as usize]).collect()
    }
}
