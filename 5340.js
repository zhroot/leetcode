/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let ret = 0;
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(grid[i][j] < 0){
                ret += (n-j);
                break;
            }
        }
    }
    return ret;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));

console.log(countNegatives([[3,2],[1,0]]));