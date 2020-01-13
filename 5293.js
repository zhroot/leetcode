/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let maxResult = 0;
    const totalSize = s.length;
    const letterArray = new Array(26);
    const lastMaxNum = new Array(26);
    lastMaxNum.fill(100000);
    for(let i=0;i<s.length;i++){
        const index = s.charCodeAt(i)-97;
        if(letterArray[index]){
            letterArray[index].push(i);
        } else {
            letterArray[index] = [i];
        }
        //console.log({index,arr:letterArray[index]})
    }
   // console.log(letterArray)
    for(let i=minSize;i<=maxSize;i++){
        for(let j = 0;j<26;j++){
            const letterPos = letterArray[j];
            if(letterPos == null|| letterPos.length <= maxResult){
                continue;
            }
            if(maxResult >= lastMaxNum[j]){
                continue;
            }
            let curNum = 0;
           // const curStr = s.substring(letterPos[0],letterPos[0]+i);
            const hash = {};
            if(letterPos.length <= maxResult){
                continue;
            }
            for(let k=0;k<letterPos.length;k++){
                const pos = letterPos[k];
                if(pos + i > totalSize){
                    break;
                }
                const curStr = s.substring(pos,pos+i);
                if(hash[curStr] == null){
                    hash[curStr] = 1;
                } else {
                    hash[curStr] += 1;
                }
            }
            const substrKeys = Object.keys(hash);
            for(let g = 0;g<substrKeys.length;g++){
                const curStr = substrKeys[g];
                const letterHash = {};
                for(let l=0;l<curStr.length;l++){
                    letterHash[curStr[l]] = 1;
                }
                if(Object.keys(letterHash).length <= maxLetters){
                    curNum = Math.max(curNum,hash[curStr]);
                }
            }
            lastMaxNum[j] = curNum; 
            if(curNum > maxResult){
                maxResult = curNum;
            }
        }
    }
    return maxResult;
};

console.log(maxFreq("aababcaab",2,3,4));
console.log(maxFreq("aaaa",1,3,3));
console.log(maxFreq("aabcabcab",2,2,3));

console.log(maxFreq("abcde",2,3,3));