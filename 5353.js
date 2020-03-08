/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    const n = light.length;
    let maxIndex = 0;
    let ret = 0;
    for(let i = 0;i<n;i++){
        let l = light[i];
        if(maxIndex < l){
            maxIndex = l;
        }
        if(maxIndex == i+1){
            ret ++;
        }
    }
    return ret;
};