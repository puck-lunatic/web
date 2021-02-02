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
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut length = 1;
        let mut current = head.unwrap();
        let mut nums: Vec<i32> = Vec::new();
        nums.push(current.val);
        while current.next != None {
            current = current.next.unwrap();
            nums.push(current.val);
            length += 1;
        }
        nums.remove((length - n) as usize);
        if nums.len() == 0 { return None;}
        let mut result = Some(Box::new(ListNode{next: None, val: nums[0]}));
        let mut current = &mut result;
        for i in 1..nums.len() {
            current.as_mut().unwrap().next = Some(Box::new(ListNode{next: None, val: nums[i]}));
            current = &mut current.as_mut().unwrap().next;
        }
        
        result
//         let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
//         let mut cur = &mut dummy;
//         let mut length = 0;

//         while let Some(_node) = cur.as_mut() {
//             cur = &mut cur.as_mut().unwrap().next;
//             if let Some(_inner_node) = cur { length += 1; }
//         }

//         let mut new_cur = dummy.as_mut();
//         let idx = length - n;

//         for _ in 0..idx {
//             new_cur = new_cur.unwrap().next.as_mut();
//         }

//         let next = new_cur.as_mut().unwrap().next.as_mut().unwrap().next.take();
//         new_cur.as_mut().unwrap().next = next;

//         dummy.unwrap().next
    }
}
