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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slow = head;
  let fast = head;
  // find the center
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse
  let next = slow.next;
  slow.next = null;
  while (next) {
    [next.next, slow, next] = [slow, next, next.next];
  }

  // merge
  let left = head;
  let right = slow;
  while (right.next) {
    const next = left.next;
    left.next = right;
    right = right.next;
    left.next.next = next;
    left = left.next.next;
  }
}
