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
use std::collections::HashSet;
impl Solution {
    pub fn find_target(root: Option<Rc<RefCell<TreeNode>>>, k: i32) -> bool {
        fn pre_order(node: Option<Rc<RefCell<TreeNode>>>, vec: &mut Vec<i32>, set: &mut HashSet<i32>) {
            if let Some(mut node) = node {
                vec.push(node.borrow().val);
                set.insert(node.borrow().val);
                pre_order(node.borrow_mut().left.take(), vec, set);
                pre_order(node.borrow_mut().right.take(), vec, set);
            }
        }
        let mut vec = Vec::new();
        let mut set = HashSet::new();
        pre_order(root, &mut vec, &mut set);
        for i in 0..vec.len() {
            let d = k - vec[i];
            if d != vec[i] && set.contains(&d) {
                return true;
            }
        }
        false
    }
}
