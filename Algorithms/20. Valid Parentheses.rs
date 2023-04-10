impl Solution {
    pub fn is_valid(s: String) -> bool {
        if s.len() == 0 {
            return true;
        }
        if s.len() % 2 == 1 {
            return false;
        }
        let chars: Vec<char> = s.chars().collect();
        let mut stack: Vec<char> = Vec::new();
        // print!("{} {}", chars[0], chars[1]);
        for i in 0..s.len() {
            // let temp = chars[i].to_string();
            match chars[i] {
                '{' => stack.push('{'),
                '(' => stack.push('('),
                '[' => stack.push('['),
                '}' => {
                    if stack.pop() == Some('{') {
                        continue;
                    } else {
                        return false;
                    }
                }
                ')' => {
                    if stack.pop() == Some('(') {
                        continue;
                    } else {
                        return false;
                    }
                }
                ']' => {
                    if stack.pop() == Some('[') {
                        continue;
                    } else {
                        return false;
                    }
                }
                _ => continue,
            }
        }
        stack.len() == 0
    }
}
