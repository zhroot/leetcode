/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = num.toString();
    let index  = str.indexOf('6');
    if(index == -1){
        return num;
    }
    let newStr = str.substring(0,index) + '9' + str.substring(index+1); 
    return parseInt(newStr)
};

console.log(maximum69Number(9669));
console.log(maximum69Number(6666));
console.log(maximum69Number(69));
console.log(maximum69Number(96));
console.log(maximum69Number(99));