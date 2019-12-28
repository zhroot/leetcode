
function checkWin(x,y,table){
    if(table[x][0] == table[x][1] && table[x][0] == table[x][2]){
        return table[x][0];
    }

    if(table[0][y] == table[1][y] && table[0][y] == table[2][y]){
        return table[0][y];
    }

    if(x == y){
        if(table[0][0] == table[1][1] && table[0][0] == table[2][2]){
            return table[0][0];
        }
    }

    if(x+y == 2){
        if(table[1][1] == table[2][0] && table[1][1] == table[0][2]){
            return table[1][1];
        }
    }
    return 0;
}

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const table = [[0,0,0],[0,0,0],[0,0,0]];
    let index = 1;
    for(let i = 0;i<moves.length;i++){
        const x = moves[i][0];
        const y = moves[i][1];
        table[x][y] = index;
        index = index % 2 + 1;
        let result = checkWin(x,y,table);
        if(result == 1){
            return 'A';
        } else if (result == 2){
            return 'B'
        }
    }
    if(moves.length == 9){
        return 'Draw';
    }
    return 'Pending';
};

function test(moves){
    const result = tictactoe(moves);
    console.log(`${moves} : ${result}`);
}

test([[0,0],[2,0],[1,1],[2,1],[2,2]]);
test([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]);
test([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]);
test([[0,0],[1,1]]);
test([[2,0],[1,0],[1,1],[0,2]]);