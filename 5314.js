/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    if(arr.length == 1){
        return 0;
    }
    if(arr[0] == arr[arr.length-1]){
        return 1;
    }
    const jumps = new Array(arr.length);
    jumps.fill(arr.length);
    const tree = {};

    for(let i=0;i<arr.length;i++){
       if(tree[arr[i]]){
        tree[arr[i]].push(i);
       } else {
        tree[arr[i]] = [i];
       }
    }
    let open = [];
    let openTree = [];
    const close = {};
    const closeTree = {};
    open.push(0);
    let step = 0;
    
    while(open.length || openTree.length){
        let newOpen = [];
        let newOpenTree = [];
        let breakFlag = false;
        function proc(index){
            if(jumps[index] > step){
                jumps[index] = step;
            }
            if(index == arr.length -1){
                return 1;
            }
            if(close[index]){
                return 2;
            }
            close[index] = 1;
            // left
            if(index > 0){
                if(!close[index-1]){
                    newOpen.push(index-1);
                }
                //close[index-1] = 1;
            }
            // right
            if(index < arr.length-1){
                if(!close[index+1]){
                    newOpen.push(index+1);
                }
                // close[index+1] = 1;
            }
            newOpenTree.push(arr[index]);
            return 0;
        }
        for(let i = 0;i<open.length;i++){
            let index = open[i];
            const ret = proc(index);
            if(ret == 1){
                breakFlag = true;
                break;
            }
        }
        if(breakFlag){
            break;
        }
        for(let item of openTree){
            /*if(closeTree[item]){
                continue;
            }
            closeTree[item] = 1;*/
            for(let i = 0;i<tree[item];i++){
                let index = tree[item][i];
                const ret = proc(index);
                if(ret == 1){
                    breakFlag = true;
                    break;
                }
            }
            if(breakFlag){
                break;
            }
        }
        if(breakFlag){
            break;
        }

        step ++;
        open = newOpen;
        openTree = newOpenTree;
        //console.log(open);
    }
   // console.log(jumps);
    return jumps[arr.length-1];
};
let arr = [100,-23,-23,404,100,23,23,23,3,404]
console.log(minJumps(arr));
arr = [7]
console.log(minJumps(arr));
arr = [7,6,9,6,9,6,9,7]
console.log(minJumps(arr));
arr = [6,1,9]
console.log(minJumps(arr));
arr = [11,22,7,7,7,7,7,7,7,22,13]
console.log(minJumps(arr));

arr = new Array(5 * 10000);
for(let i = 0;i<arr.length;i++){
    arr[i] = Math.floor(Math.random()*1000000000 * 2) - 10^8;
}

console.log(minJumps(arr));

arr = new Array(5 * 10000);
for(let i = 0;i<arr.length;i++){
    arr[i] = 7;
}
arr[arr.length-1] = 11;
console.log(minJumps(arr));
