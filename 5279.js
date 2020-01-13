/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = n;
    let a=1,b=0;
    while(num){
        const tmp = num % 10;
        num = Math.trunc(num/10);
        a *= tmp;
        b += tmp;
    }
    return a - b;
};

function test(n){
    console.log('%d,%d',n,subtractProductAndSum(n));
}

test(234);
test(4421);