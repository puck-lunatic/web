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

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    const left = cur.next;
    const right = cur.next.next;
    [left.next, right.next, cur.next] = [right.next, left, right];
    cur = cur.next.next;
  }
  return dummy.next;
}
