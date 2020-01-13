/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const results = [];
    for(let i=0;i<groupSizes.length;i++){
        const myGroupSize = groupSizes[i];
        let findResult = false;
        for(let j = 0;j<results.length;j++){
            const result = results[j];
            if(result.targetSize == myGroupSize && result.curSize < result.targetSize){
                result.mem.push(i);
                result.curSize = result.curSize + 1;
                findResult = true;
                break;
            }
        }

        if(!findResult){
            const newResult = {};
            newResult.targetSize = myGroupSize;
            newResult.curSize = 1;
            newResult.mem = [i];
            results.push(newResult);
        }
    }
    const ret = [];
    for(let i = 0;i<results.length;i++){
        ret.push(results[i].mem);
    }
    return ret;
};

function test(groupSizes){
    console.log({groupSizes,result:groupThePeople(groupSizes)});
}

test([3,3,3,3,3,1,3]);

test([2,1,3,3,3,2]);