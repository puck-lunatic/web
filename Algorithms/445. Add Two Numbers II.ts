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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const nums1: number[] = [];
  const nums2: number[] = [];
  while (l1 || l2) {
    if (l1) {
      nums1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      nums2.push(l2.val);
      l2 = l2.next;
    }
  }
  const sum = (BigInt(nums1.join("")) + BigInt(nums2.join("")))
    .toString()
    .split("")
    .map((e) => Number(e));
  // console.log(sum);
  const dummy = new ListNode();
  let head = dummy;
  while (sum.length > 0) {
    const val = sum.shift();
    const node = new ListNode(val);
    head.next = node;
    head = head.next;
  }
  return dummy.next;
}
