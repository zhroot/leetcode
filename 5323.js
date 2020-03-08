/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function comp(a,b){
        let aNum =0 ,bNum = 0;
        let aa = a,bb=b;
        while(aa){
            aNum += aa&1;
            aa = aa >> 1;
        }

        while(bb){
            bNum += bb&1;
            bb = bb >> 1;
        }
        // console.log({a,b,aNum,bNum});
        if(aNum == bNum){
            return a-b;
        }
        return aNum - bNum;
    }
    return arr.sort(comp);
};
let arr = [0,1,2,3,4,5,6,7,8]
console.log(sortByBits(arr));
arr = [1024,512,256,128,64,32,16,8,4,2,1]
console.log(sortByBits(arr));
arr = [10000,10000]
console.log(sortByBits(arr));
arr = [2,3,5,7,11,13,17,19]
console.log(sortByBits(arr));
arr = [10,100,1000,10000]
console.log(sortByBits(arr));