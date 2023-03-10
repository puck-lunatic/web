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

class Solution {
  constructor(head: ListNode | null) {
    let temp = 0;
    this.head = head;
    while (head) {
      temp++;
      head = head.next;
    }
    this.length = temp;
  }

  private length: number;
  private head: ListNode | null;

  getRandom(): number {
    let randomIndex = Math.floor(Math.random() * this.length);
    let node = this.head;
    while (randomIndex > 0) {
      node = node.next;
      randomIndex--;
    }

    return node.val;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
