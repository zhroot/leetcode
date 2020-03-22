/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let ret = 0;
    for(let i of arr1){
        let check = true;
        for(let j of arr2){
            if(Math.abs(i-j) <= d){
                check = false;
                break;
            }
        }
        if(check){
            ret += 1;
        }
    }
    return ret;
};
let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
console.log(findTheDistanceValue(arr1,arr2,d))
