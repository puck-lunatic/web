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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let fast = head;
  // find kth node
  while (k > 1) {
    fast = fast.next;
    k--;
  }
  let p = fast;
  let slow = head;
  // find kth node from last
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  let q = slow;
  [p.val, q.val] = [q.val, p.val];

  return head;
}
