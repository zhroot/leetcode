/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    let left = root.left; 
    if(left != null){
        left = removeLeafNodes(left,target);
    }
    let right = root.right
    if(right != null){
        right = removeLeafNodes(right,target);
    }
    if(left == null && right == null && root.val == target){
        return null;
    }
    root.left = left;
    root.right = right;
    return root;
};
// [1,2,3,2,null,2,4]
let testTree = {
    left:{
        left:{
            left:{
                val:2 
            }
        },
        val:2
    },
    right:{
        left:{
            val:2 
        },
        right:{
            val:4 
        },
        val:3
    },
    val:1
}


console.log(removeLeafNodes(testTree,2));