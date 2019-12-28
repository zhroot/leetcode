
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    let results = new Array(nums.length);
    results.fill(1);
    let maxLength = 1;
    for(let i = 1;i<nums.length;i++){
        let curMaxLength = 1;
        for(let j = 0;j<i;j++){
            if(nums[i]>nums[j]){
                if(results[j] + 1 > curMaxLength){
                    curMaxLength = results[j] + 1;
                }
            } 
        }
        results[i] = curMaxLength;
        if(results[i] > maxLength){
            maxLength = results[i];
        }
    }
    return maxLength;
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));