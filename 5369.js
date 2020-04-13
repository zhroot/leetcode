/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    const count = rating.length;

    const high = new Array(count);
    high[count-1] = 0;
    for(let i = count-2;i>=0;i--){
        high[i] = 0;
        for(let j = i+1;j<count;j++){
            if(rating[i]<rating[j]){
                high[i] += 1;
            }
        }
    }

    //console.log({low,high})

    let result = 0;
    for(let i = 0;i<count;i++){
        let vi = rating[i];
        for(let j = i+1;j<count;j++){
            let vj = rating[j];
            if(vi > vj){ // i > j > k
                result += (count-1 - j - high[j])
            } else { // i < j < k
                result += high[j]
            }
        }
    }
    return result;
};

let rating = [2,5,3,4,1]

console.log(numTeams(rating));

rating = [2,1,3]

console.log(numTeams(rating));

rating = [1,2,3,4]

console.log(numTeams(rating));