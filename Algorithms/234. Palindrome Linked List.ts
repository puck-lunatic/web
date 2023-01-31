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

function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode = head;
  let fast: ListNode = head;
  const arr: number[] = [];
  while (fast.next && fast.next.next) {
    arr.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast.next) {
    arr.push(slow.val);
  }

  while (slow.next) {
    slow = slow.next;
    if (arr.pop() !== slow.val) {
      return false;
    }
  }
  return true;
}
