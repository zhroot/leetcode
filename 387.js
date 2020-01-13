/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = {};
    for(let i=0;i<s.length;i++){
        if(hash[s[i]] == null){
            hash[s[i]] = {pos:i,cnt:1};
        } else {
            hash[s[i]].cnt += 1;
        }
    }
    let firstPoint = -1;
    for(const key in hash){
        if(hash[key].cnt == 1){
            if(firstPoint == -1 || firstPoint > hash[key].pos){
                firstPoint = hash[key].pos;
            }
        }
    }
    return firstPoint;
};