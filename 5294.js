/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const openboxs = {};
    const getboxs = {};
    const getkeys = [];
    let result = 0;
    for(let i = 0;i<initialBoxes.length;i++){
        const boxID = initialBoxes[i];
        if(status[boxID] == 1){
            openboxs[boxID]=1;
        } else {
            getboxs[boxID]=1;
        }
    }
    while(true){
        //用钥匙开箱子
        for(let i=getkeys.length-1;i>=0;i--){
            if(getboxs[getkeys[i]] == 1){
                delete getboxs[getkeys[i]];
                if(openboxs[getkeys[i]] == null){
                    openboxs[getkeys[i]] = 1;
                }
                getkeys.splice(i,1);
            }
        }
        const boxids = Object.keys(openboxs);
        let findBox = false;
        for(let i = 0;i<boxids.length;i++){
            const id = boxids[i];
            if(openboxs[id] == 1){
                findBox = true;
                result += candies[id];
                for(let j = 0;j<keys[id].length;j++){
                    getkeys.push(keys[id][j]);
                }
                for(let j=0;j<containedBoxes[id].length;j++){
                    const thisBoxID = containedBoxes[id][j];
                    if(status[thisBoxID] == 0){
                        if(getboxs[thisBoxID] == null){
                            getboxs[thisBoxID] = 1;
                        }
                    } else {
                        if(openboxs[thisBoxID] == null){
                            openboxs[thisBoxID] = 1;
                        }
                    }
                }
                delete openboxs[id];
            }
        }
        if(findBox == false){
            break;
        }
    }
    return result;
};

console.log(maxCandies([1,0,1,0],
    [7,5,4,100],
    [[],[],[1],[]],
    [[1,2],[3],[],[]],
    [0]));