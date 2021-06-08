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
    pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        Solution::build(&preorder, &inorder)
    }
    
    fn build(preorder: &[i32], inorder: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
        if preorder.len() == 0 { return None; }
        let (root, leftRight) = preorder.split_first().unwrap();
        let rootNode = Rc::new(RefCell::new(TreeNode::new(*root)));
        let mut mid: usize = 0;
        let length = inorder.len();
        for i in 0..length {
            if inorder[i] == *root {
                mid = i;
                break;
            }
        }
        
        let (inOrderLeft, inOrderRightContainsMid) = inorder.split_at(mid);
        let (_, inOrderRight) = inOrderRightContainsMid.split_first().unwrap();
        let (preOrderLeft, preorderRight) = leftRight.split_at(inOrderLeft.len());
        rootNode.borrow_mut().left = Solution::build(preOrderLeft, inOrderLeft);
        rootNode.borrow_mut().right = Solution::build(preorderRight, inOrderRight);
        return Some(rootNode);
    }
}
