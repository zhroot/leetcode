/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    for(let i = arr.length-1;i>=0;i++){
        const v = arr[i];
        arr[i] = v;
        if(v > max){
            max = v;
        }
    }
    return arr;
};