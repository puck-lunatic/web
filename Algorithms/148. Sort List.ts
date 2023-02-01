/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  // let node: ListNode = head;
  let arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);

  let result: ListNode = new ListNode(arr.shift());
  let node: ListNode = result;
  while (arr.length !== 0) {
    node.next = new ListNode(arr.shift());
    node = node.next;
  }

  return result;
}
