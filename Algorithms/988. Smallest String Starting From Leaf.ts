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

function smallestFromLeaf(root: TreeNode | null): string {
  const chars = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  const dfs = (node: TreeNode | null, path: string): void => {
    if (!node) {
      return;
    }
    path = chars[node.val] + path;
    if (!node.left && !node.right) {
      if (result === "" || path < result) {
        result = path;
      }
      return;
    }
    dfs(node.left, path);
    dfs(node.right, path);
  };
  dfs(root, "");

  return result;
}
