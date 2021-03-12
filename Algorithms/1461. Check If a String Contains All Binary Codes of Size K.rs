use std::collections::HashSet;

impl Solution {
    pub fn has_all_codes(s: String, k: i32) -> bool {
        let mut hs: HashSet<Vec<u8>> = HashSet::new();
        
        s.as_bytes().windows(k as usize).for_each(|x| {
            
            hs.insert(x.to_vec());
        });
        
        2i32.pow(k as u32) == (hs.len() as i32)
    }
}
