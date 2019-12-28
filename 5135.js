/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    const table = new Array(100001);
    const totalCount = arr.length;
    table.fill(0);
    for(let i of arr){
        if(table[i]){
            table[i] += 1;
        } else {
            table[i] = 1;
        }
    }
    let sum = 0;
    let curCount = 0;
    let diff = target;
    let ret = 0;
    for(let v in table){
        v = parseInt(v);
        const remain = totalCount - curCount;
        let curDiff = target - (sum + remain * v);
        const realDiff = Math.abs(curDiff);
        if(realDiff < diff){
            ret = v;
            diff = realDiff;
        }
        if(remain==0){
            break;
        }
       // console.log({remain,curDiff,diff,v,curCount});
        sum += table[v] * v;
        curCount += table[v];
    }
    return ret;
};

console.log(findBestValue([4,9,3],10));
console.log(findBestValue([2,3,5],10));

console.log(findBestValue([60864,25176,27249,21296,20204],56803));
