/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const size = citations.length;
    let l = 0;
    let h = size-1;
    while(l<h-1){
        const mid = Math.floor((l+h)/2);
        if(citations[mid]>(size-mid)){ // 往前找
            h = mid;
        } else {  //往后找
            l = mid;
        }
    }
    if(citations[l]>=size-l){
        return size-l;
    }
    if(citations[h]>=size-h){
        return size-h;
    }
    return 0;
};

console.log(hIndex([0,1,3,5,6]));

console.log(hIndex([1,2,3]));

console.log(hIndex([]));

console.log(hIndex([100]));

console.log(hIndex([0]));
console.log(hIndex([0,0]));

console.log(hIndex([1,100]));

console.log(hIndex([2,100]));