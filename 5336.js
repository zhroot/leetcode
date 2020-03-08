/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    var arr = new Array(26);
    arr.fill(0);
    for(let i= 0;i<s.length;i++){
        arr[s.charCodeAt(i)-97] += 1;
    }
    let ret = '';
    let loop = true;
    let dir = 1;
    while(loop){
        loop = false;
        if(dir == 1){
            for(let i = 0;i<26;i++){
                if(arr[i] > 0){
                    ret+=String.fromCharCode(i+97);
                    arr[i] -= 1;
                    loop = true;
                }
            }
        } else {
            for(let i = 25;i>=0;i--){
                if(arr[i] > 0){
                    ret+=String.fromCharCode(i+97);
                    arr[i] -= 1;
                    loop = true;
                }
            }
        }
        dir += 1;
        dir %= 2;
    }
    return ret;
};
let s = "aaaabbbbcccc"
console.log(sortString(s))
s = "rat"
console.log(sortString(s))
s = "leetcode"
console.log(sortString(s))
s = "ggggggg"
console.log(sortString(s))
s = "spo"
console.log(sortString(s))