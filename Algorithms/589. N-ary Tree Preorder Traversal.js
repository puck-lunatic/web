/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = dfs(root, []);
    return res;
};

var dfs = function(node, arr) {
    if (node === null) {
        return arr;
    }
    
    arr.push(node.val);
    if (node.children !== null) {
        node.children.forEach(e => {arr = dfs(e, arr)});
    } 
    return arr;
}
