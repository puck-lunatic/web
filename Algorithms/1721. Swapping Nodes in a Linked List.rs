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
    pub fn swap_nodes(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut p = head;
        let mut nodes: Vec<Box<ListNode>> = vec![];
        let k = k as usize;
        while let Some(mut node) = p {
            p = node.next.take();
            nodes.push(node);
        }
        
        let n = nodes.len();
        nodes.swap(k - 1, n - k);
        
        let mut res = None;
        while let Some(mut node) = nodes.pop() {
            node.next = res;
            res = Some(node);
        }
        
        res
    }
}
