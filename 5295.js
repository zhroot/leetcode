/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const ret = [];
    let m = n;
    if(n % 2 != 0){
        m = n - 1;
        ret.push(0);
    } else {
        m = n;
    }
    for(let i = 1,cnt=0;cnt <m/2;i++){
        if(i != n){
            ret.push(i);
            ret.push(0-i);
            cnt++;
        }
    }
    return ret;
};