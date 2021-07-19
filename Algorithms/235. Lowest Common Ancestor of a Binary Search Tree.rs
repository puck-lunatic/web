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
    pub fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let pVal = p.clone().unwrap().borrow().val;
        let qVal = q.clone().unwrap().borrow().val;
        let pNode = root.clone().unwrap().borrow().val;
        if pVal < pNode && qVal < pNode {
            return Self::lowest_common_ancestor(root.unwrap().borrow().left.clone(), p, q);
        } else if pVal > pNode && qVal > pNode {
            return Self::lowest_common_ancestor(root.unwrap().borrow().right.clone(), p, q);
        } else {
            return root;
        }
    }
}
