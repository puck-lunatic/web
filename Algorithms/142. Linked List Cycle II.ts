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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let indicator: ListNode = head;
  const nodes: ListNode[] = [];
  while (indicator) {
    if (nodes.includes(indicator)) return indicator;
    nodes.push(indicator);
    indicator = indicator.next;
  }

  return null;
}

// Two Pointer
function detectCycle2(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head,
    fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      let cur: ListNode = head;
      while (cur !== slow) {
        slow = slow.next;
        cur = cur.next;
      }
      return cur;
    }
  }
  return null;
}
