/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const arr = [];
    function loop(root){
        if(root == null){
            return;
        }
        arr.push(root.val);
        loop(root.left);
        loop(root.right);
    }
    loop(root1);
    loop(root2);
    return arr.sort((a,b)=>{ return a-b;});

};