use std::collections::HashMap;

impl Solution {
    pub fn custom_sort_string(order: String, str: String) -> String {
        let mut hm: HashMap<char, usize> = HashMap::new();
        for (i, c) in order.char_indices() {
            *hm.entry(c).or_default() = i;
        }
        let mut t: Vec<char> = str.chars().collect();
        t.sort_unstable_by_key(|c| hm.get(c).unwrap_or(&26));
        t.iter().collect()
    }
}
