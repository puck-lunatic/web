impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        if s.len() == 0 { return vec![]; }
        
        let mut result: Vec<String> = vec![];
        
        for c in s.chars() {
            let mut temp: Vec<String> = vec![];
            
            if c.is_alphabetic() {
                let lower_c: char = c.to_ascii_lowercase();
                let upper_c: char = c.to_ascii_uppercase();
                if result.len() == 0 {
                    temp.push(lower_c.to_string());
                    temp.push(upper_c.to_string());
                } else {
                    for r in result.iter() {
                        temp.push(r.to_owned() + &lower_c.to_string());
                        temp.push(r.to_owned() + &upper_c.to_string());
                    }
                }
            } else {
                if result.len() == 0 {
                    temp.push(c.to_string());
                } else {
                    for r in result.iter() {
                        temp.push(r.to_owned() + &c.to_string());
                    }
                }
            }

            result = temp;
        }
        result
    }
}
