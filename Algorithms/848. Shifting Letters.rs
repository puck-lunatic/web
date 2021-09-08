impl Solution {
    pub fn shifting_letters(s: String, shifts: Vec<i32>) -> String {
        let length = s.len();
        let mut chars: Vec<char> = s.chars().collect();
        let mut prev: u8 = 0;
        for i in (0..length).rev() {
            prev += (shifts[i] % 26) as u8;
            prev %= 26;
            chars[i] = (b'a' + (chars[i] as u8 - b'a' + prev) % 26) as char;
        }
        chars.into_iter().collect()
    }
}
