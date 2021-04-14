impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut res: i32 = 0;
        let length = s.len();
        let chars: Vec<char> = s.chars().collect();
        let mut current_char: char = '_';
        let mut current_num: i32 = 0;
        for i in 0..length {
            if current_char == '_' {
                current_char = chars[i];
                current_num = 1;
                continue;
            } 
            
            if chars[i] == current_char {
                current_num += 1;
            } else {
                current_num -= 1;
            }
            
            if current_num == 0 {
                current_char = '_';
                res += 1;
            }
        }
        
        res
    }
}
