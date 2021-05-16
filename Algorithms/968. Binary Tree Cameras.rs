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
use std::cmp;
impl Solution {
    pub fn min_camera_cover(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let res = Self::solve(&root);
        cmp::min(res[1], res[2])
    }
    
    fn solve(root: &Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
            if let Some(node) = root {
                let node = node.borrow();
                let left = Self::solve(&node.left);
                let right = Self::solve(&node.right);
                let min_left = cmp::min(left[1], left[2]);
                let min_right = cmp::min(right[1], right[2]);
                let d0 = left[1] + right[1];
                let d1 = cmp::min(left[2] + min_right, right[2] + min_left);
                let d2 = 1 + cmp::min(left[0], min_left) + cmp::min(right[0], min_right);
                vec![d0, d1, d2]
            } else {
                vec![0, 0, std::i32::MAX / 10]
            }
        }
}
