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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedListToBST(head: ListNode | null): TreeNode | null {
  const findMiddleNode = (
    left: ListNode | null,
    right: ListNode | null
  ): ListNode => {
    let fast = left;
    let slow = left;
    while (fast !== right && fast.next !== right) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };

  const buildTree = (left: ListNode | null, right: ListNode | null) => {
    if (left === right) {
      return null;
    }
    const node = findMiddleNode(left, right);
    return new TreeNode(
      node.val,
      buildTree(left, node),
      buildTree(node.next, right)
    );
  };

  return buildTree(head, null);
}
