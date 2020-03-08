/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const arr = new Array(n);
    for(let i=0;i<n;i++){
        const l = leftChild[i];
        const r = rightChild[i];
        if(l != -1){
            if(arr[l] != null){
                return false;
            } else {
                arr[l] = i;
            }
        }
        if(r != -1){
            if(arr[r] != null){
                return false;
            } else {
                arr[r] = i;
            }
        }
    }
    let rootNum = 0;
    for(let i =0;i<n;i++){
        if(arr[i] == null){
            rootNum ++;
        }
    }
    return rootNum == 1;
};

let n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
console.log(validateBinaryTreeNodes(n,leftChild, rightChild));

n = 4;
leftChild = [1,-1,3,-1];
rightChild = [2,3,-1,-1]
console.log(validateBinaryTreeNodes(n,leftChild, rightChild));

n = 2
leftChild = [1,0]
rightChild = [-1,-1]

console.log(validateBinaryTreeNodes(n,leftChild, rightChild));

n = 6
leftChild = [1,-1,-1,4,-1,-1]
rightChild = [2,-1,-1,5,-1,-1]
console.log(validateBinaryTreeNodes(n,leftChild, rightChild));