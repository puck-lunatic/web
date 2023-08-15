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

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) {
    return null;
  }

  let current = head;
  let beforeHead = new ListNode();
  let afterHead = new ListNode();

  let before = beforeHead;
  let after = afterHead;

  while (current) {
    const node = current;
    if (node.val < x) {
      current = node.next;
      before.next = node;
      before = before.next;
    } else {
      current = node.next;
      after.next = node;
      after = after.next;
    }
  }
  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
}
