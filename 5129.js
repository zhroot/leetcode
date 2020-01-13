/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    const table = new Array(arr.length);
    for(let i = 0;i<arr.length;i++){
        table[i] = new Array(arr.length);
        table[i].fill(20000);
    }
    for(let i = 0;i<arr.length;i++){
        table[0][i] = arr[0][i];
    }
    for(let i = 1;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            let min = 20000;
            for(let k = 0;k<arr.length;k++){
                if(k != j){
                    min = Math.min(table[i-1][k],min);
                }
            }
            table[i][j] = arr[i][j] + min;
        }
    }
    let min = 20000;
    for(let i = 0;i<arr.length;i++){
        min = Math.min(table[arr.length-1][i],min);
    }
    return min;
};