const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var a,b,jLen,bLen;
var line = 0;

rl.on('line', function (input) {
    line ++;
    if(line == 1){
        a = parseInt(input);
    }else if(line == 2){
        b = parseInt(input);
    }else if(line == 3){
        jLen = parseInt(input);
    }else if(line == 4){
        bLen = parseInt(input);
        work();
    }
});

var luckyNumberTable = [];


function work(){
   // console.log("%d %d %d %d",a,b,jLen,bLen);
    init();
    find();
}

function init(){
    var powMax = 0;
    var temp = b;
    while(temp > 0 ){
        temp = Math.floor(temp/10);
        powMax++;
    }
    var table = [];
    var tableIndex = 0; 
    var luckyNumIndex = 1;

    var fac,startIndex,stopIndex,findAll,luckyNum,tableLastIndex=0;

    table[tableIndex++] = 4;
    if(4 > a){
        luckyNumberTable.push(4);
        
    }
    table[tableIndex++] = 7;
    if(7 > a){
        luckyNumberTable.push(7);
        
    }
    for(var i=2;i<=powMax;i++){
        fac = Math.pow(10,i-1);
        startIndex = tableLastIndex;
        stopIndex = tableIndex;       
        findAll = false;
        tableLastIndex = tableIndex;     
        for(j=startIndex;j<stopIndex;j++){
            luckyNum = 4*fac + table[j];
            if(luckyNum > b){
                findAll = true;
                break;
            }

            if(luckyNum > a){
                luckyNumberTable.push(luckyNum);
                
            }
                
            table[tableIndex++] = luckyNum;
        }
        if(findAll)
            break;
        for(var j=startIndex;j<stopIndex;j++){
            luckyNum = 7*fac + table[j];
            if(luckyNum > b){
                findAll = 1;
                break;
            }  
            if(luckyNum > a){
                luckyNumberTable.push(luckyNum);
            }             
            table[tableIndex++] = luckyNum;
        }
        if(findAll)
            break;
    } 
    table = [];
}

function findLuckyNumberCount(start,end){
    var luckyNumSize = luckyNumberTable.length;
    var result = 0;
    for(var i=0;i<luckyNumSize;i++){
        if(luckyNumberTable[i] < start){
            continue;
        }

        if(luckyNumberTable[i] > end){
            break;
        }
        result ++ ;
    }
    return result;
}

function find(){
    var luckyNumSize = luckyNumberTable.length;
    var luckyNumMax = 0; 
    for(var i=0;i<luckyNumSize;i++){
        var jStart = luckyNumberTable[i] - bLen + 1;
        if(jStart < a){
            jStart = a;
        }
        var jEnd = jStart + jLen - 1;
        
        if(jEnd > b)
            break;
       // console.log("jStart %d jEnd %d",jStart,jEnd);
        var luckyNumMin = findLuckyNumberCount(jStart,jStart + bLen - 1);
        for(var j=0;j<luckyNumSize;j++){
            var bStart = luckyNumberTable[j]+1;
            var bEnd = bStart + bLen - 1;
            //console.log("bStart %d bEnd %d",bStart,bEnd);
            var curluckyNum = 0;
            if(bEnd > jEnd)
                break;
            if(bStart < jStart)
                continue;
            for(var k = j+1;k<luckyNumSize;k++){
                if(luckyNumberTable[k]<= bEnd){
                    curluckyNum++;
                }
                else{
                    break;
                }
            }
            if(luckyNumMin == -1){
                luckyNumMin = curluckyNum;
            } else if(curluckyNum < luckyNumMin){
                luckyNumMin = curluckyNum;
            }
        }
        if(luckyNumMax < luckyNumMin){
            luckyNumMax = luckyNumMin;
        }
    }
    console.log(luckyNumMax);
    return luckyNumMax;
}
