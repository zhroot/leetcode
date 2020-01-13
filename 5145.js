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
var sumEvenGrandparent = function(root) {
    let ret = 0;
    function loop(tree,f,ff){
        if(tree==null){
            return;
        }
        if(ff==0){
            ret += tree.val;
        }
        loop(tree.left,tree.val%2,f);
        loop(tree.right,tree.val%2,f);
    }
    loop(root,1,1); 
    return ret;
};