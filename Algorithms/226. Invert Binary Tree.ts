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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  const stack: TreeNode[] = [];
  const head: TreeNode = root;
  stack.push(head);
  while (stack.length !== 0) {
    const length: number = stack.length;
    for (let i = 0; i < length; i++) {
      let node = stack.pop();
      let left = node.left;
      let right = node.right;
      node.left = right;
      node.right = left;
      if (left) {
        stack.push(left);
      }
      if (right) {
        stack.push(right);
      }
    }
  }
  return head;
}
