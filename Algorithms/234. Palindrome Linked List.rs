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
impl Solution {
    pub fn is_palindrome(head: Option<Box<ListNode>>) -> bool {
        if head.is_none() {
            return true;
        }
        
        let mut current = head;
        let mut arr: Vec<i32> = vec![];
        let mut rarr: Vec<i32> = vec![];
        
        while let Some(node) = current {
            arr.push(node.val);
            rarr.push(node.val);
            current = node.next;
        }
        
        rarr.reverse();
        
        arr == rarr
    }
}
