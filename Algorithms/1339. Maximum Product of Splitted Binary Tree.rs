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
    pub fn max_product(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>, sum: i64, prod: &mut i64) -> i64 {
            match root {
                Some(node) => {
                    let left = dfs(node.borrow().left.clone(), sum, prod);
                    let right = dfs(node.borrow().right.clone(), sum, prod);
                    *prod = std::cmp::max(*prod, left * (sum - left));
                    *prod = std::cmp::max(*prod, right * (sum - right));
                    node.borrow().val as i64 + left + right
                }
                _ => 0
            }
        }

        let sum = dfs(root.clone(), 0, &mut 0);
        let mut res = 0;
        dfs(root, sum, &mut res);
        (res % 1_000_000_007) as i32
    }
}
