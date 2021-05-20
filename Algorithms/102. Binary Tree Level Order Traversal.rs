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
use std::collections::VecDeque;
impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        if root.is_none() { return res; }

        let mut deque: VecDeque<Option<Rc<RefCell<TreeNode>>>> = VecDeque::new();
        deque.push_back(root);

        while !deque.is_empty() {
            let mut current_level = vec![];
            let mut added = false;
            let level_size = deque.len();

            for _ in 0..level_size {
                let n = deque.pop_front();
                if let Some(Some(node)) = n {
                    current_level.push(node.borrow().val);
                    added = true;
                    if !node.borrow().left.is_none() { deque.push_back(node.borrow().left.clone()); }
                    if !node.borrow().right.is_none() { deque.push_back(node.borrow().right.clone()); }
                }
            }

            if !added { break; }

            res.push(current_level);
        }

        res
    }
}
