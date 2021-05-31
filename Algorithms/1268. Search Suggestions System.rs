use std::usize;

impl Solution {
    pub fn suggested_products(mut products: Vec<String>, search_word: String) -> Vec<Vec<String>> {
        let mut res = vec![];
        products.sort_unstable();
        let length = products.len();
        let mut prefix = "".to_string();
        let mut start = 0;
        for c in search_word.chars() {
            prefix.push(c);
            start = start
                + products[start..]
                    .binary_search(&prefix)
                    .unwrap_or_else(|p| p);
            let mut list: Vec<String> = vec![];
            let end = usize::min(start + 3, length);
            for i in start..end {
                if products[i].starts_with(&prefix) {
                    list.push(products[i].clone());
                }
            }
            res.push(list);
        }
        res
    }
}
