use std::collections::HashMap;

impl Solution {
    pub fn max_number_of_balloons(text: String) -> i32 {
        let mut hm: HashMap<char, i32> = HashMap::new();
        for c in text.chars() { 
            *hm.entry(c).or_default() += 1;
        }
        let mut balloon: HashMap<char, i32> = HashMap::new();
        for c in "balloon".chars() {
            *balloon.entry(c).or_default() += 1;
        }

        let mut res = text.len() as i32;
        for (c, v) in balloon {
            res = res.min(hm.get(&c).unwrap_or(&0) / v);
        }
        res
    }
}
