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

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let l = list1;
  let r = list1;
  for (let i = 1; i <= b + 1; i++) {
    if (i < a) {
      l = l.next;
      r = r.next;
    } else {
      r = r.next;
    }
  }
  let t = list2;
  while (t.next) {
    t = t.next;
  }
  l.next = list2;
  t.next = r;
  return list1;
}
