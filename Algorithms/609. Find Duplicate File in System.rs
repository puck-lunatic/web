use std::collections::HashMap;

impl Solution {
    pub fn find_duplicate(paths: Vec<String>) -> Vec<Vec<String>> {
        let mut hm: HashMap<String, Vec<String>> = HashMap::new();
        for s in paths {
            let mut s_iter = s.split_whitespace();
            let dir: &str = s_iter.next().unwrap();
            for f in s_iter {
                let mut f_iter = f.chars();
                let name: String = f_iter.by_ref().take_while(|&c| c != '(').collect();
                let content: String = f_iter.by_ref().take_while(|&c| c != ')').collect();
                hm.entry(content)
                    .or_default()
                    .push(format!("{}/{}", dir, name))
            }
        }
        
        hm.into_iter()
            .filter_map(|(_, v)| if v.len() > 1 { Some(v) } else { None })
            .collect()

    }
}
