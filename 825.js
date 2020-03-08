/**
 * @param {number[]} ages
 * @return {number}
 */

/* 不行的条件
    age[B] <= 0.5 * age[A] + 7  
    age[B] > age[A]
    age[B] > 100 && age[A] < 100
 */

 /*
  可以的条件
  B>0.5*A+7
  B=<A;
  !(A<100 && B > 100)
  A>=100
  B<=100
 */
/*
    1 <= ages.length <= 20000.
    1 <= ages[i] <= 120.
*/
var numFriendRequests = function(ages) {
    const ageArray = new Array(121);
    ageArray.fill(0);
    for(let i=0;i<ages.length;i++){
        ageArray[ages[i]] += 1;
    }
    let result = 0;
    for(let i = 1;i<121;i++){
        if(ageArray[i] == 0){
            continue;
        }
        let startJ = i / 2 + 7;
        if(i%2 == 1){
            startJ = Math.ceil(startJ);
        } else {
            startJ += 1;
        }
        for(let j = startJ;j<=i;j++){
            if(ageArray[j] == 0){
                continue;
            }
            if(i<105 && j>105){
                continue;
            }
            if(i==j){
                result += (ageArray[i]-1)*(ageArray[j]);
            } else {
                result += ageArray[i]*ageArray[j];
            }
            
        }
    }
    return result;
};

console.log(numFriendRequests([18,18]));
console.log(numFriendRequests([16,17,18]));
console.log(numFriendRequests([21,34,100,111,120]));

console.log(numFriendRequests([8,85,24,85,69]));

console.log(numFriendRequests([16,16,16,16,16]));