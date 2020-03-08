/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    let map = new Array(26);
    let size = votes[0].length;
    for(let i = 0;i<26;i++){
        map[i] = {a:i,arr:new Array(size),t:0};
        map[i].arr.fill(0);
    }
    for(let i = 0;i<votes.length;i++){
        for(let j = 0;j<size;j++){
            let a = votes[i].charCodeAt(j) - 65;
                map[a].arr[j] += 1;
                map[a].t +=1;
        }
    }
    map = map.filter(m => m.t > 0);
    map.sort(function(a,b){
        for(let i = 0;i<size;i++){
            if(a.arr[i] > b.arr[i]){
                return 1;
            }
            if(a.arr[i] < b.arr[i]){
                return -1;
            }
        }
        return b.a - a.a;
    });
    let ret = "";
    for(let i = map.length-1;i>=0;i--){
        ret += String.fromCharCode(map[i].a + 65);
    }
    return ret;
};

let votes = ["ABC","ACB","ABC","ACB","ACB"]
console.log(rankTeams(votes));
votes = ["WXYZ","XYZW"]
console.log(rankTeams(votes));
votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
console.log(rankTeams(votes));
votes = ["BCA","CAB","CBA","ABC","ACB","BAC"]
console.log(rankTeams(votes));
votes = ["M","M","M","M"]
console.log(rankTeams(votes));