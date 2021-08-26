impl Solution {
    pub fn is_valid_serialization(preorder: String) -> bool {
        let mut stack: Vec<char> = vec![];
        for node in preorder.split(',') {
            if node == "#" {
                while let Some('#') = stack.last() {
                    stack.pop();
                    if stack.pop().is_none() {
                        return false;
                    };
                }
                stack.push('#');
            } else {
                stack.push('$');
            }
        }
        stack == vec!['#']
    }
}
