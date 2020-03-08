/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = {};
    for(let i = 0;i<arr.length;i++){
        let num = arr[i];
        if(map[num]){
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    }
    const nums = Object.values(map);
    nums.sort();
    let size = arr.length / 2;
    for(let i = nums.length-1,j=0;i>=0;i--,j++){
        size -= nums[i];
        if(size <= 0 ){
            return j+1;
        }
    }
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));

console.log(minSetSize([1,2,3,4,5,6,7,8,9,10]));