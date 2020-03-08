/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length; 
    let open = [];
    const close = {};
    const minCost = new Array(m);
    for(let i =0;i<m;i++){
        minCost[i] = new Array(n);
        minCost[i].fill(m*n);
    }
    const offset = [[0,0],[0,1],[0,-1],[1,0],[-1,0]];
    var checkPoint = (x,y)=>{
        return x>=0&&x<m&&y>=0&&y<n;
    }
    minCost[0][0] = 0;
    open.push(0);
    while(open.length){
        const cur = open.shift();
        if(close[cur]){
            continue;
        }
        const y = cur%100;
        const x = Math.trunc(cur/100);
        const d = grid[x][y];
        close[cur] = 1;
        for(let i = 1;i<5;i++){
            let cx = x + offset[i][0];
            let cy = y + offset[i][1];
            
            if(!checkPoint(cx,cy)){
                continue;
            }
            let add = i==d?0:1;
            // console.log({x,y,cx,cy,add});
            if(minCost[cx][cy]>minCost[x][y]+add){
                minCost[cx][cy]=minCost[x][y]+add;
                // console.log({x,y,cx,cy,cost:minCost[cx][cy]});
            }
            if(i == d){
                open.unshift(cx * 100 + cy);
            } else {
                open.push(cx * 100 + cy);
            }
        }
    }
    //console.log(minCost);
    return minCost[m-1][n-1]; 
};

let grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
console.log(minCost(grid));

grid = [[1,1,3],[3,2,2],[1,1,4]]
console.log(minCost(grid));

grid = [[1,2],[4,3]]
console.log(minCost(grid));

grid = [[2,2,2],[2,2,2]]
console.log(minCost(grid));

grid = [[4]]
console.log(minCost(grid));