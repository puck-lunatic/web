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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let result = null;
  let indicator = null;
  while (list1 || list2) {
    if (!list1) {
      if (!result) {
        result = new ListNode(list2.val);
        indicator = result;
      } else {
        indicator.next = new ListNode(list2.val);
        indicator = indicator.next;
      }
      list2 = list2.next;
      continue;
    }

    if (!list2) {
      if (!result) {
        result = new ListNode(list1.val);
        indicator = result;
      } else {
        indicator.next = new ListNode(list1.val);
        indicator = indicator.next;
      }
      list1 = list1.next;
      continue;
    }

    if (list1.val <= list2.val) {
      if (!result) {
        result = new ListNode(list1.val);
        indicator = result;
      } else {
        indicator.next = new ListNode(list1.val);
        indicator = indicator.next;
      }
      list1 = list1.next;
    } else {
      if (!result) {
        result = new ListNode(list2.val);
        indicator = result;
      } else {
        indicator.next = new ListNode(list2.val);
        indicator = indicator.next;
      }
      list2 = list2.next;
    }
  }
  return result;
};
