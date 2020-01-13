
let costArray = {};
function cost(s){
    if(costArray[s] != null){
        return costArray[s];
    }
    let ret = 0;
    let x = 0;
    let y = s.length-1;
    while(x<=y){
        if(s[x] != s[y]){
            ret ++;
        }
        x++;
        y--;
    }
    costArray[s] = ret;
    return  ret;
}

let dpCache = {};
function dp(s,k){
    if(dpCache[s] == null){
        dpCache[s] = {};
    }
    if(dpCache[s][k] && dpCache[s][k]!= -1){
        return dpCache[s][k];
    }
    if(s.length == k){
        dpCache[s][k] = 0;
        return 0;
    }
    let ret = 9999999;
    if(k == 1){
        ret = cost(s);
        dpCache[s][k] = ret;
        return ret;
    }
    
    for(let i=0;i<s.length-(k-1);i++){
        const cv = cost(s.substring(0,i+1));
        ret = Math.min(ret,cv + dp( s.substring(i+1), k-1 ));
    }
    dpCache[s][k] = ret;
    return ret;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
    costArray = {};
    dpCache = {};
    return dp(s,k);
};


function test(s,k){
    console.log({s,ret:palindromePartition(s,k)});
    console.log({dpCache});
    console.log({costArray});
}

test('abc', 2);

test('aabbc', 3);

test('leetcode', 8);