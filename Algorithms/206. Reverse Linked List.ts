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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const reverse = (node: ListNode, list: ListNode | null): ListNode => node.next ? reverse(node.next, new ListNode(node.val, list)) : new ListNode(node.val, list);

    return reverse(head, null);
};
