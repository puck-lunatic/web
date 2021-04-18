impl Solution {
    pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        let key_index = match &*rule_key {
            "type" => 0,
            "color" => 1,
            "name" => 2,
            _ => panic!("key is wrong!!!"),
        };
        
        
        // println!("{}", key);
        items.iter().filter(|x| x[key_index] == &*rule_value).count() as i32
    }
}
