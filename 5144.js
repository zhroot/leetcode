/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    const m = mat.length;
    const n = mat[0].length;
    const ret = new Array(m);

    for(let i =0;i<m;i++){
        ret[i] = new Array(n);
        const minR = Math.max(i-K,0);
        const maxR = Math.min(i+K,m-1);
        for(let j=0;j<n;j++){
            let tmp = 0;
            const minC = Math.max(j-K,0);
            const maxC = Math.min(j+K,n-1);
            for(let r = minR;r<=maxR;r++){
                for(let c=minC;c<=maxC;c++){
                    tmp+=mat[r][c];
                }
            }
            ret[i][j] = tmp;
        }
    }
    return ret;
};