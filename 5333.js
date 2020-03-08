/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const mapS = {};
    const mapT = {};

    for(let i = 0;i < s.length;i++){
        if(mapS[s[i]]){
            mapS[s[i]] ++;
        } else {
            mapS[s[i]] = 1;
        }
    }

    for(let i = 0;i < t.length;i++){
        if(mapT[t[i]]){
            mapT[t[i]] ++;
        } else {
            mapT[t[i]] = 1;
        }
    }
    let ret = 0;
    for(let k in mapS){
        const v = mapS[k];
        //console.log({k,v,t:mapT[k]});
        if(mapT[k]){
            if(v > mapT[k]){
                ret += (v - mapT[k]);
            }
        } else {
            ret += v;
        }
    }
    return ret;
};

let s = "bab", t = "aba"
console.log({s,t,r:minSteps(s,t)});

 s = "leetcode"
t = "practice"
console.log({s,t,r:minSteps(s,t)});

s = "anagram"
t = "mangaar"
console.log({s,t,r:minSteps(s,t)});

s = "xxyyzz"
t = "xxyyzz"
console.log({s,t,r:minSteps(s,t)});

s = "friend"
t = "family"
console.log({s,t,r:minSteps(s,t)});
