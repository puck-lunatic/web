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

function isSymmetric(root: TreeNode | null): boolean {
  // if (!root || (!root.left && !root.right)) {
  //   return true;
  // }
  // if (!root.left || !root.right) {
  //   return false;
  // }

  // let arrL = [root.left];
  // let arrR = [root.right];
  // while (arrL.length !== 0 && arrR.length !== 0) {
  //   if (arrL.length !== arrR.length) {
  //     return false;
  //   }
  //   const tempL = [];
  //   const tempR = [];
  //   const length = arrL.length;
  //   for (let i = 0; i < length; i++) {
  //     const nodeL = arrL.shift();
  //     const nodeR = arrR.pop();
  //     if (nodeL.val !== nodeR.val) {
  //       return false;
  //     }
  //     if (!nodeL.left && nodeR.right) {
  //       return false;
  //     }
  //     if (!nodeL.right && nodeR.left) {
  //       return false;
  //     }

  //     nodeL.left && tempL.push(nodeL.left);
  //     nodeL.right && tempL.push(nodeL.right);
  //     nodeR.right && tempR.unshift(nodeR.right);
  //     nodeR.left && tempR.unshift(nodeR.left);
  //   }
  //   // console.log(tempL);
  //   // console.log(tempR);
  //   arrL = tempL;
  //   arrR = tempR;
  // }

  // return true;
  const dfs = (nodeL: TreeNode | null, nodeR: TreeNode | null) => {
    if (nodeL === null && nodeR === null) {
      return true;
    }
    if (nodeL === null || nodeR === null || nodeL.val !== nodeR.val) {
      return false;
    }
    return dfs(nodeL.left, nodeR.right) && dfs(nodeL.right, nodeR.left);
  };

  return dfs(root.left, root.right);
}
