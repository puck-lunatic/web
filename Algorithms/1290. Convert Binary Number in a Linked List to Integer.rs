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
    pub fn get_decimal_value(head: Option<Box<ListNode>>) -> i32 {
        let mut arr: Vec<char> = Vec::new();
        let mut list = &head;
        // print!("{}", list.as_ref().unwrap().val.to_string().chars().collect::<Vec<char>>()[0]);
        arr.push(list.as_ref().unwrap().val.to_string().chars().collect::<Vec<char>>()[0]);
        while list.as_ref().unwrap().next != None {
            list = &list.as_ref().unwrap().next;
            arr.push(list.as_ref().unwrap().val.to_string().chars().collect::<Vec<char>>()[0]);
        }
        // print!("{}", arr.iter().cloned().collect::<String>());
        let result = arr.iter().cloned().collect::<String>();
        i32::from_str_radix(&result, 2).unwrap()
    }
}
