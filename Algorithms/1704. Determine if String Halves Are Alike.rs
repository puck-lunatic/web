impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        let dic: Vec<char> = vec!['a', 'e',  'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let mid = s.len() / 2;
        let pre =  &s[..mid];
        let post = &s[mid..];
        pre.chars().filter(|x| dic.contains(x)).count() == post.chars().filter(|x| dic.contains(x)).count()
    }
}
