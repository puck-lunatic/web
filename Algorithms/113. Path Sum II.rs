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
    pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
        fn dfs(node: Option<Rc<RefCell<TreeNode>>>, path: Vec<i32>, paths: &mut Vec<Vec<i32>>) {
            if let Some(mut node) = node {
                let v = node.borrow().val; 
                let mut npath = path;
                npath.push(v);
                if node.borrow().left == None && node.borrow().right == None {
                    paths.push(npath.clone());
                }
                dfs(node.borrow_mut().left.take(),  npath.clone(), paths);
                dfs(node.borrow_mut().right.take(), npath.clone(), paths);
            }
        }
        let p = Vec::new();
        let mut vec = Vec::new();
        dfs(root, p, &mut vec);
        let mut res = Vec::new();
        for v in &vec {
            let sum : i32 = v.iter().sum();
            if sum == target_sum {
                res.push(v.clone());
            }
        }
        res
    }
}
