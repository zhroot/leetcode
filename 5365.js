/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {

    let result = 0;
    for(let num of nums){
        let fac = new Set();
        let end = Math.floor(Math.sqrt(num))
        for(let j = 1;j<=end;j++){
            if(num%j == 0){
                let f1 = j;
                let f2 = num / j;
                fac.add(f1);
                fac.add(f2);
                if(fac.size > 4){
                    break;
                }
            }
        }
        if(fac.size == 4){
            for(let f of fac){
                result += f;
            }
        }
    }
    return result;
};

console.log(sumFourDivisors([21,4,7]));

const nums = new Array(10000);

for(let i = 0;i < 10000;i++){
    nums[i] = Math.floor(Math.random() * 100000);
}
console.log('start')
const start = new Date();
console.log(sumFourDivisors(nums));
console.log('cost:',new Date()-start)
