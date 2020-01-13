/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const len = arr.length;
    const table = {};
    for(let i=0;i<len;i++){
        let cnt = table[arr[i]];
        if(cnt){
            cnt += 1;
            
        } else {
           cnt = 1;
        }
        if(cnt >= len * 0.25){
            return arr[i];
        }
        table[arr[i]] = cnt;
    }
};