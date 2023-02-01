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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let odd: ListNode = head;
    let oddStart: ListNode = odd;
    let even: ListNode = head.next;
    let evenStart: ListNode = even;
    let node: ListNode = head.next.next;
    let indicator: number = 3;
    while (node) {
        if (indicator % 2 === 1) {
            odd.next = node;
            odd = odd.next;
        } else {
            even.next = node;
            even = even.next;
        }
        indicator++;
        node = node.next;
    }
    even.next = null;
    odd.next = evenStart;
    return oddStart;
};
