/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const map = new Array(mat[0].length+1);
    for(let i = 0;i<mat.length;i++){
        let sum = 0;
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] == 0){
                if(map[sum]){
                    map[sum].push(i);
                } else {
                    map[sum] = [i];
                }
                break;
            } else {
                sum ++;
            }
        }
        if(sum == mat[i].length){
            if(map[sum]){
                map[sum].push(i);
            } else {
                map[sum] = [i];
            }
        }
    }
    let ret = [];
    for(let i = 0;i<=mat[0].length;i++){
       // console.log(map[i]);
        if(map[i]!=null){
            ret = ret.concat(map[i]);
            if(ret.length >= k){
               // console.log(ret);
                ret = ret.slice(0,k);
                break;
            }
        }
    }
    return ret;
};

let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]];
let k = 3;

console.log(kWeakestRows(mat,k));

mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]];
k = 2;
console.log(kWeakestRows(mat,k));

 mat =[[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]
 k = 1

console.log(kWeakestRows(mat,k));