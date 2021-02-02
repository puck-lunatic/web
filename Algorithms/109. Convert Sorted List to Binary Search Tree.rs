// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
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
//     pub fn sorted_list_to_bst(head: Option<Box<ListNode>>) -> Option<Rc<RefCell<TreeNode>>> {
//         if head == None {
//             return None;
//         }
//         let mut head = head;
//         let mut mid: Option<Box<ListNode>> = Self::findMiddleElement(&head);
//         let mut node: TreeNode = TreeNode::new(mid.as_ref().unwrap().val);
        
//         if head == mid {
//             return Some(Rc::new(RefCell::new(node)));
//         }
        
//         node.left = Self::sorted_list_to_bst(head);
//         node.right = Self::sorted_list_to_bst(mid.unwrap().next);
//         Some(Rc::new(RefCell::new(node)))
//     }
    
//     pub fn findMiddleElement(head: &Option<Box<ListNode>>) -> Option<Box<ListNode>> {
//         let mut prev: Option<Box<ListNode>> = None;
//         let mut slow: Option<Box<ListNode>> = *head;
//         let mut fast: Option<Box<ListNode>> = *head;
//         while fast != None && fast.as_ref().unwrap().next != None {
//             prev = slow;
//             slow = slow.unwrap().next;
//             fast = fast.unwrap().next.unwrap().next;
//         }
//         if prev != None {
//             prev.unwrap().next = None;
//         }
//         slow
//     }
    pub fn sorted_list_to_bst(head: Option<Box<ListNode>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut ptr = &head;
        let mut cnt = 0;
        while let Some(boxed) = ptr {
            cnt += 1;
            ptr = &boxed.next
        }
        let mut ptr = &head;
        Self::_list_to_bst(&mut ptr, cnt)
    }

    fn _list_to_bst(ptr: &mut &Option<Box<ListNode>>, len: usize) -> Option<Rc<RefCell<TreeNode>>> {
        if len == 0 {
            return None;
        }
        let left = Self::_list_to_bst(ptr, len / 2);
        let boxed = ptr.as_ref().unwrap();
        let mut node = TreeNode::new(boxed.val);
        node.left = left;
        *ptr = &boxed.next;
        node.right = Self::_list_to_bst(ptr, len - len / 2 - 1);
        Some(Rc::new(RefCell::new(node)))
    }

}
