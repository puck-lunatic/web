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

function minDiffInBST(root: TreeNode | null): number {
  let result: number = Infinity;
  const queue: TreeNode[] = [];
  const traverse = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    traverse(node.left);
    queue.push(node);
    traverse(node.right);
  };
  traverse(root);
  for (let i = 1; i < queue.length; i++) {
    result = Math.min(result, Math.abs(queue[i].val - queue[i - 1].val));
  }
  return result;
}
