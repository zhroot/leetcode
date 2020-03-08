
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // arr.sort();
    let map = {};
    let zore = 0;
    for(let i of arr){
        map[i] = i;
        if(i == 0){
            zore ++;
        }
    }
    for(let i of Object.keys(map)){
        if(i == 0 ){
            if(zore > 1){
                return true;
            }
        } else if(map[2*i]){
            return true;
        }
    }
    return false;
    
};

console.log(checkIfExist([7,1,14,11]));

console.log(checkIfExist([3,1,7,11]));

console.log(checkIfExist([-2,0,10,-19,4,6,-8]));

console.log(checkIfExist([0,0]));