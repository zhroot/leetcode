
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    const MAXX = grid.length;
    if(MAXX == 0){
        return 0;
    }
    const MAXY = grid[0].length;
    const flagArray = new Array(MAXX*MAXY);
    flagArray.fill(0);
    let isLandIndex = 0;
    const openStack = [];
    for(let x = 0; x < MAXX; x++){
        for(let y = 0; y < MAXY; y++){
            if(grid[x][y] == '1' && flagArray[x*MAXY+y]==0){
                isLandIndex += 1;
                openStack.push({x,y});
                flagArray[x*MAXX+y] = isLandIndex;
                while(openStack.length){
                    const curPos = openStack.pop();
                    const curX = curPos.x;
                    const curY = curPos.y;
                    // up 
                    if(curY > 0){
                        if(grid[curX][curY-1] == '1' && flagArray[curX*MAXY+curY-1]==0){
                            flagArray[curX*MAXY+curY-1] = isLandIndex;
                            openStack.push({x:curX,y:curY-1});
                        }
                    }
                    // down
                    if(curY < MAXY-1){
                        if(grid[curX][curY+1] == '1' && flagArray[curX*MAXY+curY+1]==0){
                            flagArray[curX*MAXY+curY+1] = isLandIndex;
                            openStack.push({x:curX,y:curY+1});
                        }
                    }

                    // left 
                    if(curX > 0){
                        if(grid[curX-1][curY] == '1' && flagArray[(curX-1)*MAXY+curY]==0){
                            flagArray[(curX-1)*MAXY+curY] = isLandIndex;
                            openStack.push({x:curX-1,y:curY});
                        }
                    }

                    // right
                    if(curX < MAXX-1){
                        if(grid[curX+1][curY] == '1' && flagArray[(curX+1)*MAXY+curY]==0){
                            flagArray[(curX+1)*MAXY+curY] = isLandIndex;
                            openStack.push({x:curX+1,y:curY});
                        }
                    }
                }

            }
        }
    }
    return isLandIndex;
};

let num = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);

console.log('num',num);

num = numIslands([["1"],["1"]]);

console.log('num',num);