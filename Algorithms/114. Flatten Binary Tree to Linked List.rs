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
    pub fn flatten(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        if root.is_none() {
            return;
          }
          let mut v = vec![];
          let mut stack = vec![];
          let mut root_clone = root.clone();
          while stack.len() != 0 || !root_clone.is_none() {
            while !root_clone.is_none() {
              let node = root_clone.unwrap();
              v.push(node.clone());
              root_clone = node.borrow_mut().left.take();
              stack.push(node);
            }
            root_clone = stack.pop();
            root_clone = root_clone.unwrap().borrow_mut().right.take();
          }

          for i in 1..v.len() {
            let mut pre = &v[i - 1];
            let mut curr = &v[i];
            pre.as_ref().borrow_mut().left = None;
            pre.as_ref().borrow_mut().right = Some(curr.clone());
          }
    }
}
