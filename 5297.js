/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const close = {};
    const open = [];
    open.push(start);
    while(open.length){
        const index = open.pop();
        if(index >= 0 && index < arr.length){
            if(close[index] != null){
                continue;
            }
            close[index] = 1;
            if(arr[index] == 0){
                return true;
            } else {
                open.push(index + arr[index]);
                open.push(index - arr[index]);
            }
        }
    }
    return false;
};

function test(arr,start){
    console.log('--',canReach(arr,start));
}

test([4,2,3,0,3,1,2],0);

test([4,4,1,3,0,3],2);