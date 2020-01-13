
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const M = mat.length;
    const N = mat[0].length;
    let maxLen = 0;
    for(let i = 0;i<M;i++){
        for(let j = 0;j<N;j++){
            const kArr = new Array(Math.min(M,N));
            kArr[0] = mat[i][j];
            if(maxLen < 1){
                if(threshold>=kArr[0]){
                    maxLen = 1;
                }
            }
            let maxSideLength = Math.min(M-i,N-j);
            for(let k = 1;k<maxSideLength;k++){
                kArr[k] = kArr[k-1];
                for(let x = 0;x<k;x++){
                    kArr[k] += mat[i+x][j+k];
                    kArr[k] += mat[i+k][j+x];
                }
                kArr[k] += mat[i+k][j+k];

                if(maxLen < k+1){
                    if(threshold>=kArr[k]){
                        maxLen = k+1;
                    }
                }
            }
        }
    }
    return maxLen;
};

console.log(maxSideLength([[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]],4));

console.log(maxSideLength([[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]],1));

console.log(maxSideLength([[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]],6));

console.log(maxSideLength([[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]],40184));