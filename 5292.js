/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if(nums.length % k != 0){
        return false;
    }
    const table = {};
    for(let i=0;i<nums.length;i++){
        if(table[nums[i]] != null){
            table[nums[i]] += 1;
        } else {
            table[nums[i]] = 1;
        }
    }
    const keys = Object.keys(table);
    for(let i = 0;i<keys.length;){
        const start = parseInt(keys[i]);
        if(table[start] <= 0){
            i++;
            continue;
        }
        for(let j=0;j<k;j++){
            if(table[start+j] != null && table[start+j] > 0){
                table[start+j] -= 1;
            } else {
                return false;
            }
        }
        if(table[start] <= 0){
            i++;
        }
    }
    return true;
};


console.log(isPossibleDivide([1,2,3,3,4,4,5,6],4));

console.log(isPossibleDivide([15,16,17,18,19,16,17,18,19,20,6,7,8,9,10,3,4,5,6,20],5));
