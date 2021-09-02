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
    pub fn generate_trees(n: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        if n == 0 {
            return vec![];
        }
        Solution::gen_trees(1, n)
    }

    fn gen_trees(start: i32, end: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        if start > end {
            return vec![None];
        }
        let mut trees = Vec::new();
        for i in start..=end {
            let left = Solution::gen_trees(start, i - 1);
            let right = Solution::gen_trees(i + 1, end);
            for l in &left {
                for r in &right {
                    let current = Rc::new(RefCell::new(TreeNode::new(i)));
                    current.borrow_mut().left = l.clone();
                    current.borrow_mut().right = r.clone();
                    trees.push(Some(current));
                }
            }
        }
        trees
    }
}
