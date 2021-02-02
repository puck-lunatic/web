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
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head == None { return None }
        // Init
        let mut currentTarget = head.unwrap();
        let mut currentValue = currentTarget.val;
        
        let mut result = Some(Box::new(ListNode{next: None, val: currentValue}));
        let mut cursor = &mut result;
        
        while currentTarget.next != None {
            if currentTarget.next.as_mut().unwrap().val != currentValue {
                currentValue = currentTarget.next.as_mut().unwrap().val;
                cursor.as_mut().unwrap().next = Some(Box::new(ListNode{next: None, val: currentValue}));
                cursor = &mut cursor.as_mut().unwrap().next;
            }
            currentTarget = currentTarget.next.unwrap();
        }
        
        result
    }
}
