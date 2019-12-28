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
var deepestLeavesSum = function(root) {
    const arr = new Array(10000);
    arr.fill(0);
    function loop(tree,deep){
        arr[deep] += tree.val;
        if(tree.left){
            loop(tree.left,deep+1);
        }
        if(tree.right){
            loop(tree.right,deep+1);
        }
    }
    loop(root,0);
    for(let i = 10000;i>=0;i--){
        if(arr[i] > 0){
            return arr[i];
        }
    }
};