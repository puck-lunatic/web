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

function kthSmallest(root: TreeNode | null, k: number): number {
  const join = (
    leftNode: TreeNode | null,
    rightNode: TreeNode | null,
    arr: number[]
  ): number[] =>
    (leftNode ? join(leftNode.left, leftNode.right, [leftNode.val]) : [])
      .concat(arr)
      .concat(
        rightNode ? join(rightNode.left, rightNode.right, [rightNode.val]) : []
      );

  const arr: number[] = join(root.left, root.right, [root.val]);
  return arr[k - 1];
}
