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
    pub fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        if nums.is_empty() {
            None
        } else {
            Self::generate_binary_tree(&nums, 0, nums.len())
        }

    }

    pub fn generate_binary_tree(nums: &Vec<i32>, start: usize, end: usize) -> Option<Rc<RefCell<TreeNode>>> {
        if start >= end {
            None
        } else {
            let mid = (start + end) / 2;
            let node = Rc::new(RefCell::new(TreeNode::new(nums[mid])));
            node.borrow_mut().left = Self::generate_binary_tree(nums, start, mid);
            node.borrow_mut().right = Self::generate_binary_tree(nums, mid + 1, end);
            Some(node)
        }
    }
}
