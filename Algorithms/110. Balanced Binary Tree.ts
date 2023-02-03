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

function isBalanced(root: TreeNode | null): boolean {
  if (!root || (!root.left && !root.right)) {
    return true;
  }
  if (!root.left) {
    return root.right.left === null && root.right.right === null;
  }
  if (!root.right) {
    return root.left.left === null && root.left.right === null;
  }
  const deep = (root: TreeNode): number => {
    let result: number = 0;
    const arr: TreeNode[] = [root];
    while (arr.length !== 0) {
      const length: number = arr.length;
      for (let i = 0; i < length; i++) {
        const node: TreeNode = arr.shift();
        if (node.left) {
          arr.push(node.left);
        }
        if (node.right) {
          arr.push(node.right);
        }
      }
      result++;
    }
    return result;
  };
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(deep(root.left) - deep(root.right)) < 2
  );
}
