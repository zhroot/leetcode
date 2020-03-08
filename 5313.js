/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let hAng = hour / 12 * 360;
    let mAng = minutes / 60 * 360;
    hAng += minutes / 60 /12 * 360;
    let ret = Math.abs(mAng - hAng);
    if(ret > 180){
        ret = 360 - ret;
    }
    return ret;
};

console.log(angleClock(12,30));
console.log(angleClock(3,30));
console.log(angleClock(3,15));
console.log(angleClock(4,50));
console.log(angleClock(12,0));
console.log(angleClock(1,18));
