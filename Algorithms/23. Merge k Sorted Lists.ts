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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null) => {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }
      cur = cur.next;
    }
    cur.next = list1 || list2;
    return dummy.next;
  };
  const length = lists.length;
  for (let i = 1; i < length; i++) {
    lists[i] = mergeTwoLists(lists[i - 1], lists[i]);
  }
  return lists[length - 1];
}
