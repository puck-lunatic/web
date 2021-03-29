// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn flip_match_voyage(root: Option<Rc<RefCell<TreeNode>>>, voyage: Vec<i32>) -> Vec<i32> {
        let mut i = 0;
        let mut answer = Vec::new();
        if Self::dfs(&root, &voyage, &mut i, &mut answer) {
            answer
        } else {
            vec![-1]
        }
    }
    fn dfs(
        node: &Option<Rc<RefCell<TreeNode>>>,
        voyage: &[i32],
        i: &mut usize,
        answer: &mut Vec<i32>,
    ) -> bool {
        if let Some(n) = node {
            if n.borrow().val != voyage[*i] {
                return false;
            }
            *i += 1;
            let left = &n.borrow().left;
            if left.is_some() && left.as_ref().map(|l| l.borrow().val) != Some(voyage[*i]) {
                answer.push(n.borrow().val);
                Self::dfs(&n.borrow().right, voyage, i, answer)
                    && Self::dfs(&n.borrow().left, voyage, i, answer)
            } else {
                Self::dfs(&n.borrow().left, voyage, i, answer)
                    && Self::dfs(&n.borrow().right, voyage, i, answer)
            }
        } else {
            true
        }
    }
}
