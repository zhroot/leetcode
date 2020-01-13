/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const openRooms = [];
    openRooms.push(0);
    const roomStates = new Array(rooms.length);
    roomStates.fill(0);
    roomStates[0] = 1;
    while(openRooms.length > 0){
        const roomId = openRooms.pop();
        for(const key of rooms[roomId]){
            if(roomStates[key] == 0){
                openRooms.push(key);
                roomStates[key] = 1;
            } 
        }
    }
    for(const state of roomStates){
        if(state == 0){
            return false;
        }
    }
    return true;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[2],[],[1]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));
