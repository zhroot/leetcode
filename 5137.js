/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const LEN = board.length;
    const table = new Array(LEN*LEN);
    table.fill(null);
    table[LEN*LEN] = 0;
    function loop(x,y){
        if(table[x*LEN + y]){
            return table[x*LEN + y];
        }
        if(board[x].charAt(y) == 'S'){
            table[x*LEN + y] = {s:0,c:1};
            return table[x*LEN + y];
        }
        else if(board[x].charAt(y) == 'X'){
            table[x*LEN + y] = {s:-1,c:0};
            return table[x*LEN + y];
        }
        let curV = 0;
        if(board[x].charAt(y) != 'E'){
            curV = parseInt(board[x].charAt(y));
        }
        let max = -1;
        let count = 0;
        //right
        if(y < LEN-1){
            const ret = loop(x,y+1);
            if(ret.s != -1){
                if(ret.s > max){
                    max = ret.s;
                    count = ret.c;
                } else if(ret.s == max){
                    count += ret.c;
                }
            }
        }

        if(x < LEN - 1){
            const ret = loop(x-1,y);
            if(ret.s != -1){
                if(ret.s > max){
                    max = ret.s;
                    count = ret.c;
                } else if(ret.s == max){
                    count += ret.c;
                }
            }
        }

        if(y < LEN-1 && x < LEN - 1){
            const ret = loop(x-1,y-1);
            if(ret.s != -1){
                if(ret.s > max){
                    max = ret.s;
                    count = ret.c;
                } else if(ret.s == max){
                    count += ret.c;
                }
            }
        }
        
        if(max == -1){
            table[x*LEN + y] = {s:-1,c:0};
            return table[x*LEN + y];
        }
        table[x*LEN+y] = {s:max+curV,c:count % 1000000007};
        return table[x*LEN+y];
    }
    const ret = loop(0,0);
    if(ret.s == -1){
        return [0,0];
    }
    return [ret.s % 1000000007 ,ret.c ];
};