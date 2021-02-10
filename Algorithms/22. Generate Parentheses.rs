impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        let mut result: Vec<String> = vec![];
        Self::recurse(&mut result, n, n, String::from(""));
        result
    }
    
    fn recurse(result: &mut Vec<String>, left: i32, right: i32, current: String) {
        if left == 0 && right == 0 {
            result.push(current);
            return;
        }
        
        if left > 0 {
            Self::recurse(result, left - 1, right, current.clone() + "(");
        }
        
        if right > left {
            Self::recurse(result, left, right - 1, current.clone() + ")");
        }
    }
}
