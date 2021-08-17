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
    pub fn good_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        Solution::dfs(&root, None)
    }

    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, max: Option<i32>) -> i32 {
        if let Some(n) = node {
            let val = n.borrow().val;
            let m = Some(max.map_or(val, |m| m.max(val)));
            (if m == Some(val) { 1 } else { 0 })
                + Solution::dfs(&n.borrow().left, m)
                + Solution::dfs(&n.borrow().right, m)
        } else {
            0
        }
    }
}
