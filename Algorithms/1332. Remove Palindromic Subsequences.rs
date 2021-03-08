trait Palindrome {
    fn is_palindrome(&self) -> bool;
}

impl Palindrome for String {
    fn is_palindrome(&self) -> bool {
        let mut start: usize = 0;
        let length = self.len();
        let mut end: usize = length - 1;
        let chars: Vec<char> = self.chars().collect();
        while start <= end {
            if chars[start] != chars[end] {
                return false;
            }
            start += 1;
            end -= 1;
        }
        true
    }
}

impl Solution {
    pub fn remove_palindrome_sub(s: String) -> i32 {
        if s.is_empty() {
            0
        } else {
            if s.is_palindrome() {
                1
            } else {
                2
            }
        }
    }
}
