const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var seqs = [];

rl.on('line', function (input) {
    seqs = convertStrArr2IntArr(input.split(","));
    init();
    work();
    rl.close();
});

function convertStrArr2IntArr(arr){
    for(var i = 0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

var dpTable = [];

function init(){
   // dpTable[0] = {};
    var curTable = {};
    if(seqs[0] == -1){      
        for(var i = 0;i<=40;i++){
            curTable[i] = {'sum':i,'order':0,'count':1};
        }       
    } else {
        curTable[seqs[0]] = {'sum':seqs[0],'order':0,'count':1};
    }
    dpTable[0] = curTable;
}
function work(){
    //console.log(seqs);
    //console.log(dpTable);
    for(var i = 1;i<seqs.length;i++){
        if(seqs[i] == -1){
            for(var k in dpTable[i-1]){
               //console.log(k); 
            }
        }
    }
}