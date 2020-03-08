/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let map = {};
    for(let i=0;i<n;i++){
        const leader = manager[i];
        if(map[leader])  {
            map[leader].push(i);
        } else {
            map[leader] = [i];
        }
    }
    function loop (leader){
        let selfTime = 0;
        if(leader != -1){
            selfTime = informTime[leader];
        }
        let maxTime = 0;
       // console.log('leader', leader)
       // console.log(map[leader])
        if(!map[leader])
        {
            return selfTime;
        }
        for(let c of map[leader]){
          //  console.log({c})
            let cTime = loop(c);
            if(cTime > maxTime){
                maxTime = cTime;
            }
        }
        return selfTime + maxTime;
    }

    return loop(-1);

};

let n = 1, headID = 0, manager = [-1], informTime = [0]
console.log(numOfMinutes(n, headID, manager, informTime));


n = 6; 
headID = 2;
manager = [2,2,-1,2,2,2];
informTime = [0,0,1,0,0,0];
console.log(numOfMinutes(n, headID, manager, informTime));


n = 7;
headID = 6;
manager = [1,2,3,4,5,6,-1];
informTime = [0,6,5,4,3,2,1];
console.log(numOfMinutes(n, headID, manager, informTime));

n = 15
headID = 0
manager = [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6]
informTime = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
console.log(numOfMinutes(n, headID, manager, informTime));

n = 4
headID = 2
manager = [3,3,-1,2]
informTime = [0,0,162,914]
console.log(numOfMinutes(n, headID, manager, informTime));