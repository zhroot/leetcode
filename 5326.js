/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let arr = new Array(n+1);
    arr[1] = 1;
    for(let i = 2;i<n+1;i++){
        let r = 0;
        for(let j = 1;j<=(2*i-1);j++){
            r += j;
        }
        arr[i] = arr[i-1] * r % 100000007;
    }
    return arr[n];
};

console.log(countOrders(500));