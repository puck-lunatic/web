use std::collections::HashMap;

impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        
        if digits.len() == 0 { return vec![]; }
        
        // let mut size: usize = 1;
        // digits.chars().for_each(|x| {
        //     if x == '7' || x == '8' {
        //         size *= 4;
        //     }else {
        //         size *= 3;
        //     }
        // });
        // println!("{}", size);
        let mut result: Vec<String> = vec![];
        // println!("{}", digits);
        let letter_map: HashMap<char, Vec<char>> = [
            ('2', vec!['a', 'b', 'c']),
            ('3', vec!['d', 'e', 'f']),
            ('4', vec!['g', 'h', 'i']),
            ('5', vec!['j', 'k', 'l']),
            ('6', vec!['m', 'n', 'o']),
            ('7', vec!['p', 'q', 'r', 's']),
            ('8', vec!['t', 'u', 'v']),
            ('9', vec!['w', 'x', 'y', 'z']),
        ].iter().cloned().collect();
        
        for num in digits.chars() {
            let letters = letter_map.get(&num).unwrap();
            let mut temp: Vec<String> = vec![];

            for c in letters {
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
