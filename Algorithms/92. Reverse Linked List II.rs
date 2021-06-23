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
    pub fn reverse_between(head: Option<Box<ListNode>>, left: i32, right: i32) -> Option<Box<ListNode>> {
        if left == right { return head; }

        let mut cur = head;
        let mut nums = vec![];
        while let Some(node) = cur {
            nums.push(node.val);
            cur = node.next;
        }
        let times = (right - left + 1) / 2;
        for i in 0..times {
            nums.swap((left + i - 1) as usize, (right - i - 1) as usize);
        }
        nums.reverse();
        let mut res = None;
        for i in 0..nums.len() {
            let last = nums[i];
            let mut node = ListNode::new(last);
            node.next = res;
            res = Some(Box::new(node));
        }
        res
    }
}
