/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let ret = 0;
    while(num){
        if(num % 2){
            num -= 1;
        } else {
            num = num /2;
        }
        ret ++;
    }
    return ret;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));

