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

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let total = 0;
  let cur = head;
  while (cur) {
    total += 1;
    cur = cur.next;
  }
  const result: ListNode[] = [];
  const quo = Math.floor(total / k);
  let rem = total % k;
  const groups = new Array(k).fill(quo);
  for (let i = 0; i < rem; i++) {
    groups[i] += 1;
  }

  for (const group of groups) {
    if (group === 0) {
      result.push(null);
      continue;
    }
    let node = new ListNode(head.val);
    result.push(node);
    for (let i = 0; i < group - 1; i++) {
      head = head.next;
      node.next = new ListNode(head.val);
      node = node.next;
    }
    head = head.next;
  }
  return result;
}
