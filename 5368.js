/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let t = {};
    for(let a of arr){
        if(t[a]){
            t[a] += 1;
        } else {
            t[a] = 1;
        }
    }
    let keys = Object.keys(t);
    let max = -1;
    for(let key of keys){
        if(t[key] == key){
            let keyNum = parseInt(key);
            max = Math.max(keyNum,max)
        }
    }
    return max;
};

let arr = [2,2,3,4]

console.log(findLucky(arr));

 arr = [1,2,2,3,3,3]

console.log(findLucky(arr));

 arr = [2,2,2,3,3]

console.log(findLucky(arr));

 arr = [5]

console.log(findLucky(arr));

 arr = [7,7,7,7,7,7,7]

console.log(findLucky(arr));