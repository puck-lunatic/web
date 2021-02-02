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
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match head {
            None => None,
            Some(mut inner_h) => match inner_h.next {
                None => Some(inner_h),
                Some(mut inner_s) => {
                    inner_h.next = Solution::swap_pairs(inner_s.next);
                    inner_s.next = Some(inner_h);
                    Some(inner_s)
                }
            }
        }
    }
}
