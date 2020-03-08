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
var maxProduct = function(root) {
    const loop1 = (root)=>{
        let leftSum = 0;
        let rightSum = 0;
        if(root.left){
            leftSum = loop1(root.left);
        }
        if(root.right){
            rightSum = loop1(root.right);
        }
        root.leftSum = leftSum;
        root.rightSum = rightSum;
        return root.val + root.leftSum + root.rightSum
    };
    const totalSum = loop1(root);
    let minDiff = 10001;
    let ret = 0;
    const modMax = 1000000007;
    const loop2 = (root)=>{
        if(root.left){
            let l = root.leftSum;
            let r = totalSum - l;
            const diff = Math.abs(l-r);
            //console.log({diff,l,r});
            if(minDiff > diff){
                minDiff = diff;
                ret =  ((l % modMax) * (r % modMax)) % modMax;
               // console.log({diff,l,r,ret});
            }
            loop2(root.left);
        }
        if(root.right){
            let l = root.rightSum;
            let r = totalSum - l;
            const diff = Math.abs(l-r);
            //console.log({diff,l,r});
            if(minDiff > diff){
                minDiff = diff;
                ret =  ((l % modMax) * (r % modMax)) % modMax;
                //console.log({diff,l,r,ret});
            }
            loop2(root.right);
        }
    };
    loop2(root);
    return ret;
};

console.log(maxProduct({
    val:1,
    left:{
        val:1
    }
}));

const arr = [403,726,240,879,607,440,485,522,741,132,976,161,null,412,721,466,807,636,105,null,289,null,206,942,961,376,691,568,500,247,489,null,null,157,239,720,865,616,37,null,null,null,null,833,812,448,null,null,258,null,578,null,null,451,null,381,133,362,null,685,331,523,624,177,null,null,null,null,225,null,null,null,null,null,null,null,null,null,null,null,null,null,889,458,null,719,385,355,122,926,123,926,650,335,923,null,921,null,null,null,235,null,null,null,null,662,265,677,null,null,null,589,807,null,760,null,412,588,965,null,116,444,902,null,141,null,null,573,767,null,763,721,null,null,850,null,null,null,null,527,null,130,null,null,null,null,null,null,null,null,null,null,null,654,25,104,null,628,895,null,null,767,null,563,206,null,null,917,null,391,null,null,null,362,null,null,null,null,56,178,505,555,null,null,440,null,null,null,null,null,null,null,null,null,null,null,null,92];

