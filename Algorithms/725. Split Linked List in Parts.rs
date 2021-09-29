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
    pub fn split_list_to_parts(head: Option<Box<ListNode>>, k: i32) -> Vec<Option<Box<ListNode>>> {
        let mut head = head;
        let mut count = 0;
        let mut cur = head.as_ref();
        while let Some(node) = cur {
            count += 1;
            cur = node.next.as_ref();
        }

        let (mut part, mut remainder) = (count / k, count % k);
        let mut res = vec![None; k as usize];

        for i in 0..(k as usize) {
            res[i] = head;
            let mut cur = res[i].as_mut();
            for j in 1..(part + if remainder > 0 {
            remainder -= 1;
            1
            } else {
            0
            }) {
                cur = cur.unwrap().next.as_mut();
                }
                if let Some(node) = cur {
                head = node.next.take();
                } else {
                break;
            }
        }
        res
    }
}