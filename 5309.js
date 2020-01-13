/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if(n-1 > connections.length){
        return -1;
    }
    const arr = new Array(n);
    let trees = {};
    for(let i = 0;i<arr.length;i++){
        arr[i] = i;
        trees[i] = [i];
    }
    for(let i = 0;i<connections.length;i++){
        const a = connections[i][0];
        const b = connections[i][1];
        let rootA = arr[a];
        let treeA = trees[rootA];
        let rootB = arr[b];
        if(rootA == rootB){
            continue;
        }
        let treeB = trees[rootB];
        for(let j = 0;j<treeB.length;j++){
            arr[treeB[j]] = rootA;
        }
        treeA = treeA.concat(treeB);
        trees[rootA] = treeA;
        delete trees[rootB];
        // console.log({a,b,trees,arr});
    }
    let result = Object.keys(trees).length;
    return result - 1;
};

console.log(makeConnected(12,[[1,5],[1,7],[1,2],[1,4],[3,7],[4,7],[3,5],[0,6],[0,1],[0,4],[2,6],[0,3],[0,2]]));