/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    const tree = new Array(100001);
    table.fill(-1);
    let max = 0;
    let min = 100001;
    for(let i=0;i<intervals.length;i++){
        const a = intervals[i][0];
        const b = intervals[i][1];
        if(tree[a] < b){
            tree[a] = b;
        }
        if(max < b){
            max = b;
        }
        if(min > a){
            min = a;
        }
    }
    const table = new Array(100001);
    table.fill(-1);
    let cnt = 0;
    for(let i = min;i<=max;i++){
        if(tree[i] != -1){
            if(table[i] < tree[i]){
                for(let j=table[i];j<=tree[i];j++){
                    table[j] = tree[i];
                }
                cnt+=1;
            }
        }
    }
    return cnt;
};