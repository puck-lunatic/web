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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) {
    return null;
  }
  const length: number = postorder.length;
  const val: number = postorder[length - 1];
  const i: number = inorder.indexOf(val);
  return new TreeNode(
    val,
    buildTree(inorder.slice(0, i), postorder.slice(0, i)),
    buildTree(inorder.slice(i + 1), postorder.slice(i, length - 1))
  );
}
