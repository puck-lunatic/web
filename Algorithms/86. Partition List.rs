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
    pub fn partition(head: Option<Box<ListNode>>, x: i32) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }
        
        let mut current = head;
        let mut before_head = Box::new(ListNode::new(-1));
        let mut after_head = Box::new(ListNode::new(-1));

        let mut before = before_head.as_mut();
        let mut after = after_head.as_mut();
        
        while let Some(mut node) = current {
            if node.val < x {
                current = node.next.take();
                before.next = Some(node);
                before = before.next.as_mut().unwrap();
            } else {
                current = node.next.take();
                after.next = Some(node);
                after = after.next.as_mut().unwrap();
            }
        }
        
        after.next = None;
        
        before.next = after_head.next;
        before_head.next
    }
}
