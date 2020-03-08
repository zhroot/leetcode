/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if(root == null){
        return false;
    }
    if(isSubPathLoop(head,root)){
        return true;
    }
    if(isSubPathLoop(head,root.left)){
        return true;
    }

    if(isSubPathLoop(head,root.right)){
        return true;
    }
    
    if(isSubPath(head,root.left)){
        return true;
    }

    if(isSubPath(head,root.right)){
        return true;
    }
    return false;
};

var isSubPathLoop = function(head, root) {
    if(head == null){
        return true;
    }
    if(root == null){
        return false;
    }
    if(head.val == root.val){
        if(isSubPathLoop(head.next,root.left)){
            return true;
        }
        if(isSubPathLoop(head.next,root.right)){
            return true;
        }
    }
    return false;
}