/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let ret = 0;
    let lastSum = 0;
    for(let i = 0;i<k;i++){
        lastSum += arr[i];
    }
    const newThreshold = k*threshold;
    if(lastSum >= newThreshold){
        ret ++;
    }
    for(let i = 1;i<=arr.length-k;i++){
        lastSum -= arr[i-1];
        lastSum += arr[i+k-1];
        if(lastSum >= newThreshold){
            ret ++;
        }
    }
    return ret;
};

let arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
console.log(numOfSubarrays(arr,k,threshold))
arr = [1,1,1,1,1]; k = 1; threshold = 0;
console.log(numOfSubarrays(arr,k,threshold))
arr = [11,13,17,23,29,31,7,5,2,3];k = 3;threshold = 5;
console.log(numOfSubarrays(arr,k,threshold))
arr = [7,7,7,7,7,7,7]; k = 7; threshold = 7;
console.log(numOfSubarrays(arr,k,threshold))
arr = [4,4,4,4]; k = 4; threshold = 1;
console.log(numOfSubarrays(arr,k,threshold))