/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n%2==0){
        return "a".repeat(n-1) + "b";
    }
    return "a".repeat(n);
};

console.log(generateTheString(1));
console.log(generateTheString(2));