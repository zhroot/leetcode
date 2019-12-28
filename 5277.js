/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const M =  matrix.length;
    const N = matrix[0].length;
    let result = 0;
    for(let x = 0;x<M;x++){
        for(let y =0;y<N;y++){
            if(matrix[x][y] == 0){
                continue;
            }
            const maxLength = Math.min(M-x,N-y);
            for(let i = 0;i<maxLength;i++){
                let checkFlag = true;
                for(let xi = x;xi <= x+i;xi++){
                    if(!checkFlag){
                        break;
                    }
                    for(let yi = y;yi <= y+i;yi++){
                        if(matrix[xi][yi] == 0){
                            checkFlag = false;
                            break;
                        }
                    } 
                }
                if(checkFlag){
                    result += 1;
                }
            }
        }
    }
    return result;
};