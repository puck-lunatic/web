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

function pairSum(head: ListNode | null): number {
  let arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let result = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    result = Math.max(result, arr[i] + arr[arr.length - i - 1]);
  }

  return result;
}
