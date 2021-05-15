impl Solution {
    pub fn is_number(s: String) -> bool {
        if s == "inf" || s == "-inf"  || s == "+inf"  { return false; }
        s.trim().parse::<f64>().is_ok()
    }
}
