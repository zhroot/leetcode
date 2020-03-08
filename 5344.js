/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ret = [];
    for(let i = 0;i< nums.length;i++){
        let tmp = 0;
        let num = nums[i];
        for(let j = 0;j<nums.length;j++){
            if(i != j){
                if(nums[j]<num){
                    tmp ++;
                }
            }
        }
        ret.push(tmp);
    }
    return ret;
};