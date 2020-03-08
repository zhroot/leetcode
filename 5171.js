/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    let min = Math.floor(Math.sqrt(num+2));
    for(let i = min;i>0;i--){
        if((num+1) % i == 0){
            return [i,(num+1)/i];
        } else if((num+2) % i == 0){
            return [i,(num+2)/i];
        }
    }
};
let num = 8
for(let i = 1;i<1000000000;i++){
    // console.log({num:i,r:closestDivisors(i)})
    closestDivisors(i)
}
num = 123
console.log({num,r:closestDivisors(num)})
num = 999
console.log({num,r:closestDivisors(num)})
num = 100000000
console.log({num,r:closestDivisors(num)})

