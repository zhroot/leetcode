/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let points = new Array(n);
    for(let i = 0;i<n;i++){
        points[i] = [];
    }
    let pointColor = new Array(n);
    pointColor.fill(-1);

    function fillColor(index){
        //console.log('fillColor',index);
        //console.log('ranges',ranges[index]);
        for(let j=index-ranges[index];j<index+ranges[index];j++){
            if(j < 0){
                continue;
            }
            if(j>=n){
                continue;
            }
            if(pointColor[j] == -1){
                //console.log('fill',j);
                pointColor[j] = index;
            }
        }
    }
    for(let i = 0;i<=n;i++){
        if(ranges[i] == 0){
            continue;
        }
        for(let j=i-ranges[i];j<i+ranges[i];j++){
            if(j < 0){
                continue;
            }
            if(j>=n){
                continue;
            }
            let a = points[j];
            a.push(i);
            points[j] = a;
        }
    }
    for(let i = 0;i<n;i++){
        if(points[i].length == 1){
            const index = points[i][0];
            fillColor(index);
        }
        if(points[i].length == 0){
            return -1;
        }
    }
    // console.log(pointColor);
    for(let i = 0;i<n;i++){
        if(pointColor[i] == -1){
            let maxLength = 0;
            let findIndex = -1;
            // console.log('search',i);
            for(let j = 0;j<points[i].length;j++){
                const index = points[i][j];
                let curLength = 0;
                for(let k=index-ranges[index];k<index+ranges[index];k++){
                    if(k < 0){
                        continue;
                    }
                    if(k>=n){
                        continue;
                    }
                    if(pointColor[k] == -1){
                        curLength ++;
                    }
                }
                if(curLength > maxLength){
                    maxLength = curLength;
                    findIndex = index;
                    // console.log('find',index);
                }
            }
            fillColor(findIndex);
        }
    }

    let lastIndex = -1;
    let result = 0;
    
    for(let i = 0;i<n;i++){
        if(pointColor[i] != lastIndex){
            lastIndex = pointColor[i];
           // console.log({index:lastIndex,range:ranges[lastIndex]});
            //console.log({start:lastIndex-ranges[lastIndex],end:lastIndex+ranges[lastIndex]});
            result++;
        }
    }
    return result;
};

console.log(minTaps(5,[3,4,1,1,0,0]));
console.log(minTaps(3,[0,0,0,0]));

console.log(minTaps(7,[1,2,1,0,2,1,0,1]));

console.log(minTaps(8,[4,0,0,0,0,0,0,0,4]));

console.log(minTaps(8,[4,0,0,0,4,0,0,0,4]));

console.log(minTaps(35,[1,0,4,0,4,1,4,3,1,1,1,2,1,4,0,3,0,3,0,3,0,5,3,0,0,1,2,1,2,4,3,0,1,0,5,2]));



