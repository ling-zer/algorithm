/* 
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归
var maxDepth = function(root) {
    if(root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// 遍历
var maxDepth1 = function(root) {
    if(root == null) return 0;
    var queue = [];
    queue.push([root, 1]);
    var depth = 1;
    while(queue.length) {
        var nodes = queue.shift();
        var node = nodes[0];
        depth = nodes[1];
        if(node.left) queue.push([node.left, depth + 1]);
        if(node.right) queue.push([node.right, depth + 1]);
        
    }
    return depth;
};

// 遍历
var maxDepth2 = function(root) {
    if(root == null) return 0;
    var queue = [];
    queue.push(root);
    var depth = 0;
    while(queue.length) {
        var tmp = []; // 暂存下一层节点
        for(var node of queue) {
            // var node = queue.shift();
            if(node.left) tmp.push(node.left);
            if(node.right) tmp.push(node.right);
        }
        depth += 1;
        queue = tmp;    
    }
    return depth;
};