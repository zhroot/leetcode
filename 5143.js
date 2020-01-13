/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ret = [];
    for(let i = 0;i<nums.length;i+=2){
        const tmpArr = new Array(nums[i]);
        tmpArr.fill(nums[i+1]);
        ret = ret.concat(tmpArr);
    }
    return ret;
};