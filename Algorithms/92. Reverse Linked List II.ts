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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) {
    return head;
  }

  let current = head;
  const nums: number[] = [];
  while (current) {
    nums.push(current.val);
    current = current.next;
  }
  const times = (right - left + 1) >> 1;
  for (let i = 0; i < times; i++) {
    [nums[left + i - 1], nums[right - i - 1]] = [
      nums[right - i - 1],
      nums[left + i - 1],
    ];
  }
  let dummy = new ListNode();
  let newCurrent = dummy;
  while (nums.length > 0) {
    const val = nums.shift();
    newCurrent.next = new ListNode(val);
    newCurrent = newCurrent.next;
  }
  return dummy.next;
}
