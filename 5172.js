/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const numMap = new Array(10);
    numMap.fill(0);
    let sum = 0;
    for(let d of digits){
        numMap[d] ++;
        sum += d;
    }
    let map = {
        1:[1,4,7],
        2:[2,5,8]
    }
    
    if(sum == 0){
        return "0";
    }
    let find = false;

    function del(n,count){
        let delNum = 0;
        for(let num of map[n]){
            if(numMap[num] >= (count-delNum)){
                find = true;
                numMap[num] -= (count-delNum);
                break;
            } else if (numMap[num] > 0){
                numMap[num] -= 1;
                delNum ++;
                if(delNum == count){
                    find = true;
                    break;
                }
            }
        }
        return find;
    }

    if(sum % 3 == 0){
        find = true;
    } else if(sum % 3 == 1){    // mod 1
        // del 1 or two 2
        // check 
        del(1,1);
        if(!find){
            del(2,2);
        }
    } else {    // mod 2
        del(2,1);
        if(!find){
            del(1,2);
        }
    }
    if(find){
        let ret = "";
        for(let i=9;i>=0;i--){
            ret += (i+'').repeat(numMap[i]);
        }
        return ret;
    }
    return "";
};
let digits = [8,1,9]
console.log(largestMultipleOfThree(digits));
digits = [8,6,7,1,0]
console.log(largestMultipleOfThree(digits));
digits = [1]
console.log(largestMultipleOfThree(digits));
digits = [0,0,0,0,0,0]
console.log(largestMultipleOfThree(digits));

digits = [1,1,1,2]
console.log(largestMultipleOfThree(digits));


digits = [8,7,7,0,7]
console.log(largestMultipleOfThree(digits));

digits = [9,8,6,8,6]
console.log(largestMultipleOfThree(digits));
