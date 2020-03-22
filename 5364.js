/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    for(let i = 0;i<index.length;i++){
        target.splice(index[i],0,nums[i])
    }
    return target;
};
let nums = [0,1,2,3,4], index = [0,1,2,2,1]
console.log(createTargetArray(nums,index))