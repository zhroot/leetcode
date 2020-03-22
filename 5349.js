/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let num = n * 2;
    const seatMap = {};
    for(let reserved of reservedSeats){
        const row = reserved[0];
        const col = reserved[1];
        if(seatMap[row] == null){
            seatMap[row] = [0,0,0,0]
        }
        if(col > 1 && col < 6){
            seatMap[row][0] = 1;
        } else if(col > 5 && col < 10){
            seatMap[row][2] = 1;
        } 
        if(col > 3 && col < 8){
            seatMap[row][1] = 1;
        }
        let curNum = seatMap[row][0] + seatMap[row][2];

        if(curNum == 2){
            curNum = seatMap[row][1]==1?2:1;
        }
        num = num + seatMap[row][3] - curNum;
        seatMap[row][3] = curNum;
    }
    //console.log(seatMap)
    return num;
};

let n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
console.log(maxNumberOfFamilies(n, reservedSeats))
n = 2; reservedSeats = [[2,1],[1,8],[2,6]]
console.log(maxNumberOfFamilies(n, reservedSeats))
n = 4; reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
console.log(maxNumberOfFamilies(n, reservedSeats))

n=5;
reservedSeats = [[4,7],[4,1],[3,1],[5,9],[4,4],[3,7],[1,3],[5,5],[1,6],[1,8],[3,9],[2,9],[1,4],[1,9],[1,10]]

console.log(maxNumberOfFamilies(n, reservedSeats))