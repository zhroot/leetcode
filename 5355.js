/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const map = {}
    if(n == 1){
        return 1
    }
    function addEdge(from,to){
        if(map[from]){
            map[from].push(to);
        } else {
            map[from] = [to];
        }
    }
    for(let edge of edges){
        let from = edge[0]
        let to = edge[1]
        addEdge(from,to)
        addEdge(to,from)
    }
    let open = [1];
    let close = {1:1};
    let leaf = {}
    for(let i = 0;i<t;i++){
        let newOpen = [];
        for(let j = 0;j<open.length;j++){
            let node = open[j]
            let rate = close[node]
           // console.log({node,rate});
            let childs = map[node].filter(n=> close[n]==null);
            if(childs.length > 0){
                let newRate = rate * (1/childs.length);
                for(let c of childs){
                    newOpen.push(c)
                    close[c] = newRate;
                }
            } else {
                leaf[node] = true;
            }
        }
        open = newOpen;
    }
    //console.log({open,t:open.includes[target]})
    if(open.includes(target) || leaf[target]){
        return close[target]
    } 
    return 0
};
let n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
console.log(frogPosition(n, edges, t, target))

n = 7
edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]]
t = 1
target = 7

console.log(frogPosition(n, edges, t, target))
n = 7
edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]]
t = 20
target = 6
console.log(frogPosition(n, edges, t, target))

n = 8
edges = [[2,1],[3,2],[4,1],[5,1],[6,4],[7,1],[8,7]]
t = 7
target = 7
console.log(frogPosition(n, edges, t, target))
console.log('=====');
n = 3
edges = [[2,1],[3,2]]
t = 1
target = 2

console.log(frogPosition(n, edges, t, target))


n = 1
edges = []
t = 1
target = 1
console.log(frogPosition(n, edges, t, target))
