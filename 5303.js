/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let ret = '';
    let flag = 1;
    let lastnum = -1;
    for(let i = s.length-1;i>=0;i--){
        if(s[i] == '#'){
            flag = 2;
            lastnum = -1;
        } else {
            if(flag == 1){
                ret = String.fromCharCode(97 + (s[i] - '1')) + ret;
            } else {
                if(lastnum == -1){
                    lastnum = s[i] - '0';
                } else {
                    lastnum += (s[i] - '0')*10;
                    console.log(lastnum);
                    ret = String.fromCharCode(106 + lastnum - 10) + ret;
                    flag = 1;
                }
                
            }
        }
    }
    return ret;
};

let s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";
console.log(freqAlphabets(s));
s = "10#11#12";
console.log(freqAlphabets(s));