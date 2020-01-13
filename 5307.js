/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    function checkZore(x){
        while(x>0){
            if(x % 10 == 0){
                return false;
            }
            x = Math.floor(x/10);
        }
        return true;
    }
    for(let i = 1;i<n;i++){
        if(checkZore(i) &&checkZore(n-i) ){
            return [i,n-i];
        }
    }
};

console.log(getNoZeroIntegers(1010));