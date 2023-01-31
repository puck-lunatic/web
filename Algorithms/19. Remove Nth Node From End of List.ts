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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast: ListNode = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  let slow: ListNode = head;
  let slowPrev: ListNode = null;
  let slowNext: ListNode = slow.next;
  while (fast) {
    slowPrev = slow;
    slow = slow.next;
    slowNext = slow.next;
    fast = fast.next;
  }
  if (slowPrev === null) {
    return head.next;
  }
  slowPrev.next = slowNext;
  return head;
}
