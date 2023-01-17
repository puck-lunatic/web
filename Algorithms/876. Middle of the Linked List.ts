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

function middleNode(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const nodes: ListNode[] = [];
    while (head.next) {
        const val = head;
        nodes.push(head);
        head = head.next;
    }
    nodes.push(head);
    return nodes[Math.floor(nodes.length / 2)];
};
