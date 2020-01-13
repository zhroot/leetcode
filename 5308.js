/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let ret = 0;
    for(let i=0;i<32;i++){
        const bit_a = a >> i & 0x1;
        const bit_b = b >> i & 0x1;
        const bit_c = c >> i & 0x1;
        console.log({bit_a,bit_b,bit_c});
        if((bit_a | bit_b) == bit_c){
            console.log('continue',bit_a | bit_b);
            continue;
        }
        // all zore 
        if(bit_c == 1){
            console.log('add 1');
            ret += 1;
            continue;
        }

        if(bit_a == 1){
            console.log('add a 1');
            ret += 1;
        }
        if(bit_b == 1){
            console.log('add b 1');
            ret += 1;
        }
    }
    return ret;
};

console.log(minFlips(2,6,5));