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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, leafs: number[]): number[] => {
    if (!node) {
      return leafs;
    }
    if (!node.left && !node.right) {
      return [...leafs, node.val];
    }
    return [...dfs(node.left, leafs), ...dfs(node.right, leafs)];
  };

  const result1 = dfs(root1, []);
  const result2 = dfs(root2, []);

  return (
    result1.length == result2.length &&
    result1.every((e, i) => e === result2[i])
  );
}
