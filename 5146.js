/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    const ret = new Set();
    for(let i = 0;i<text.length;i++){
        for(let j = i+1;j<text.length;j+=2){
            let find = true;
            for(let b=i,e=i+(j-i+1)/2;e<=j;b++,e++){
                if(text[b]!=text[e]){
                    find = false;
                    break;
                }
            }
            if(find){
                ret.add(text.substring(i,j+1));
                //console.log(text.substring(i,j+1));
            }
        }
    }
    return ret.size;
};

function test(text){
    console.log('%s %d',text,distinctEchoSubstrings(text));
}

test("abcabcabc");
test("leetcodeleetcode");