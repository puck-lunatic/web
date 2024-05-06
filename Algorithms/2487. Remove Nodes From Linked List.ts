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

function removeNodes(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(Number.POSITIVE_INFINITY, head);
  const stack: ListNode[] = [dummy];
  for (let cur = head; cur; cur = cur.next) {
    while (stack.at(-1).val < cur.val) {
      stack.pop();
    }
    stack.at(-1).next = cur;
    stack.push(cur);
  }
  return dummy.next;
}
