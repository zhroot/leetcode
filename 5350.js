/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const wight = new Array(hi+1);
    wight[1] = 0;
    wight[2] = 1;
    function loopWight(n){
        if(wight[n]){
            return wight[n];
        }
        if(n % 2){
            const ret = 1 + loopWight(3*n+1);
            wight[n] = ret;
            return ret
        } else {
            const ret = 1 + loopWight(n/2);
            wight[n] = ret;
            return ret
        }
    }
    for(let i = hi;i>=lo;i--){
        loopWight(i);
    }
    const arr = new Array(hi-lo+1);
    for(let i = 0;i<(hi-lo+1);i++){
        arr[i] = lo+i;
    }
    
    arr.sort((a,b)=>{
        if(wight[a] == wight[b]){
            return a-b;
        }
        return wight[a] - wight[b]
    })
    //console.log(arr);
    return arr[k-1];
};
let lo = 12,hi = 15, k = 2
console.log(getKth(lo,hi,k))

lo = 1
hi = 1
k = 1
console.log(getKth(lo,hi,k))

lo = 7
hi = 11
k = 4

console.log(getKth(lo,hi,k))

lo = 10
hi = 20
k = 5

console.log(getKth(lo,hi,k))

lo = 1
hi = 1000
k = 777
console.log(getKth(lo,hi,k))