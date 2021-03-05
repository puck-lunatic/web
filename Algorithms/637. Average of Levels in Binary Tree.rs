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
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut res: Vec<f64> = vec![];
        
        if let Some(temp_node) = root {
            let mut queue = vec![];
            queue.push(temp_node);
            
            while !queue.is_empty() {
                let length = queue.len();
                let mut temp_sum = 0.0 as f64;
                for _ in (0..length) {
                    if let Some(temp_node) = queue.pop() {
                        let temp_root = temp_node.borrow();
                        temp_sum += temp_root.val as f64;
                        
                        if let Some(left) = &temp_root.left {
                            queue.insert(0, left.clone())
                        }
                        if let Some(right) = &temp_root.right {
                            queue.insert(0, right.clone())
                        }
                    }
                }
                
                let average = (temp_sum as f64) / (length as f64);
                res.push(average);
            }
        }
        
        res
    }
}
