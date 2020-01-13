
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    let table = new Array(grid.length);
    const M = grid.length;
    const N = grid[0].length;
    for(let i=0;i<grid.length;i++){
        const newArr = new Array(grid[i].length);
        for(let j=0;j<grid[i].length;j++){
            newArr[j] = new Array(k)
            newArr[j].fill(-1);
        }
        table[i] = newArr;
    }
    for(let g = 0;g<k;g++){
        table[0][0][g] = grid[0][0];
    }
    let open = [];
    let close = {};
    open.push(0);
    while(open.length){
        let
    }

    return ret;
};

console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]],1));