use std::collections::HashMap;

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        let mut hmst: HashMap<char, char> = HashMap::new();
        let mut hmts: HashMap<char, char> = HashMap::new();
        let mut is = s.chars();
        let mut it = t.chars();
        while let (Some(cs), Some(ct)) = (is.next(), it.next()) {
            if let Some(&vt) = hmst.get(&cs) {
                if vt != ct {
                    return false;
                }
            } else {
                hmst.insert(cs, ct);
            }
            if let Some(&vs) = hmts.get(&ct) {
                if vs != cs {
                    return false;
                }
            } else {
                hmts.insert(ct, cs);
            }
        }
        true
    }
}
