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
    pub fn prune_tree(mut root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn helper(root: Option<&mut Rc<RefCell<TreeNode>>>) -> bool {
            if root.is_some() {
                let mut node=root.unwrap().borrow_mut();
                let left = helper(node.left.as_mut());
                let right = helper(node.right.as_mut());
                if !left {
                    node.left = None;
                }
                if !right {
                    node.right = None;
                }
                return node.val == 1 || left || right;
            }
            false
        }

        if !helper(root.as_mut()) {
            return None;
        }
        root
    }
}
