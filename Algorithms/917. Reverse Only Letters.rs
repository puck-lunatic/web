impl Solution {
    pub fn reverse_only_letters(s: String) -> String {
        let mut stack: Vec<char> = Vec::new();
        for c in s.chars() {
            if c.is_alphabetic() {
                stack.push(c);
            }
        }

        let mut res: Vec<char> = Vec::new();

        for c in s.chars() {
            if c.is_alphabetic() {
                let temp = stack.pop().unwrap();
                res.push(temp);
            } else {
                res.push(c);
            }
        }

        res.iter().collect()
    }
}
