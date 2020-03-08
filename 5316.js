/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let array = s.split(' ');
    let ret = [];
    for(let j = 0;j<200;j++){
        let needBreak = true;
        let tmpStr = '';
        for(let i = 0;i<array.length;i++){
            if(array[i].length > j){
                tmpStr += array[i][j];
                needBreak = false;
            } else{
                tmpStr += ' ';
            }
        }
        if(needBreak){
            break;
        }
        ret.push(tmpStr.trimRight());
    }
    return ret;
};

console.log(printVertically("HOW ARE YOU"));

console.log(printVertically("TO BE OR NOT TO BE"));

console.log(printVertically("CONTEST IS COMING"));