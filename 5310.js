const keyboard = {
    65:[0,0],
    66:[0,1],
    67:[0,2],
    68:[0,3],
    69:[0,4],
    70:[0,5],
    71:[1,0],
    72:[1,1],
    73:[1,2],
    74:[1,3],
    75:[1,4],
    76:[1,5],
    77:[2,0],
    78:[2,1],
    79:[2,2],
    80:[2,3],
    81:[2,4],
    82:[2,5],
    83:[3,0],
    84:[3,1],
    85:[3,2],
    86:[3,3],
    87:[3,4],
    88:[3,5],
    89:[4,0],
    90:[4,1],
}
/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const states = new Array(word.length*27*27);
    states.fill(-1);
    function dis(a,b){
        return Math.abs(keyboard[a][0]-keyboard[b][0]) 
        + Math.abs(keyboard[a][1]-keyboard[b][1]);
    }
    function loop(index,finger1,finger2){
        if(index == word.length){
            return 0;
        }
        const curChar = word.charCodeAt(index);
        const curFinger1 = finger1 || curChar;
        const curFinger2 = finger2 || curChar;
        let offset1 = 26;
        if(finger1){
            offset1 = (finger1 - 65)
        } 
        let offset2 = 26;
        if(finger2){
            offset2 = (finger2 - 65)
        }

        if(states[index*27*27 + offset1*27 + offset2] != -1){
            return states[index*27*27 + offset1*27 + offset2];
        }   
        const disF1 = dis(curFinger1,curChar);
        let r1 =  disF1 + loop(index+1,curChar,finger2);

        const disF2 = dis(curFinger2,curChar);
        let r2 = disF2 + loop(index+1,finger1,curChar);
        const result = Math.min(r1,r2);
        states[index*27*27 + offset1*27 + offset2] = result;
        //console.log({index,finger1,finger2,result});
        return Math.min(r1,r2);
    }
    return loop(0,null,null);
    //return min;

};

console.log('%s=>%d','CAKE',minimumDistance('CAKE'));
console.log('%s=>%d','HAPPY',minimumDistance('HAPPY'));


function randStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 console.log(minimumDistance(randStr(300)));
