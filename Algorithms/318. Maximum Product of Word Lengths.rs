use std::collections::HashMap;

impl Solution {
    pub fn max_product(words: Vec<String>) -> i32 {
        let mut hm: HashMap<u32, usize> = HashMap::new();
        for word in words {
            let mut mask: u32 = 0;
            for c in word.bytes() {
                mask |= 1 << (c - b'a');
            }
            let size = hm.entry(mask).or_default();
            *size = word.len().max(*size);
        }
        let mut res = 0;
        for (&ka, &va) in &hm {
            for (&kb, &vb) in &hm {
                if ka & kb == 0 {
                    res = res.max(va * vb);
                }
            }
        }
        res as i32
    }
    
}
