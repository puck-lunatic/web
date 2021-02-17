impl Solution {
    pub fn to_lower_case(str: String) -> String {
        str.chars().map(|x| x.to_ascii_lowercase()).collect()
    }
}
