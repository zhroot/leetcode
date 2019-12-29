/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
    const table = {};
    let fac = 1;
    for(let i = result.length-1;i>=0;i--){
        const c = result.charAt(i);
        if(table[c]){
            table[c].r += fac;
        } else {
            table[c] = {r:fac,m:0};
        }
        if(i == 0){
            table[c].m = 1;
        }
        fac *=10;
    }
    for(let i = 0;i<words.length;i++){
        const word = words[i];
        fac = 1;
        for(let j = word.length-1;j>=0;j--){
            const c = word.charAt(j);
            if(table[c]){
                table[c].r -= fac;
            } else {
                table[c] = {r:0-fac,m:0};
            }
            if(j == 0){
                table[c].m = 1;
            }
            fac *=10;
        }
    }
    const keys = Object.keys(table);
    const usedNum = new Array(10);
    usedNum.fill(0);
    const numMap = {};
    function loop(index){
        if(index == keys.length){
            let result = 0;
            for(let key in table){
                const val = numMap[key];
                result += val * table[key].r;
            }
            return result == 0;
        }
        const key = keys[index];
        for(let i = table[key].m;i<10;i++){
            if(usedNum[i] == 0){
                usedNum[i] = 1;
                numMap[key] = i;
                if(loop(index+1,usedNum,numMap)){
                    return true;
                }
                usedNum[i] = 0;
            }
        }
        return false;
    }
    return loop(0);
};