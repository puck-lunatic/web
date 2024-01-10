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

function amountOfTime(root: TreeNode | null, start: number): number {
    const g = new Map<number, number[]>();
    const create = ({ val, left, right }: TreeNode) => {
        if (left !== null) {
            g.set(val, [...(g.get(val) ?? []), left.val]);
            g.set(left.val, [...(g.get(left.val) ?? []), val]);
            create(left);
        }
        if (right !== null) {
            g.set(val, [...(g.get(val) ?? []), right.val]);
            g.set(right.val, [...(g.get(right.val) ?? []), val]);
            create(right);
        }
    };
    create(root);

    const dfs = (start: number, far: number) => {
        let result = 0;
        for (const v of g.get(start) ?? []) {
            if (v !== far) {
                result = Math.max(result, dfs(v, start) + 1);
            }
        }
        return result;
    };
    return dfs(start, -1);
};