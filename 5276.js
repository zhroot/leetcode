/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    let jumbo = 0;
    let small = 0;
    if(tomatoSlices % 2 != 0){
        return [];
    }
    jumbo = tomatoSlices / 2 - cheeseSlices;
    small = cheeseSlices - jumbo;

    if(jumbo <0 || small < 0){
        return [];
    }
    return [jumbo,small];
};


function test(tomatoSlices, cheeseSlices){
    console.log({tomatoSlices, cheeseSlices,numOfBurgers:numOfBurgers(tomatoSlices, cheeseSlices)});
}

test(16,7);
test(17,4);
test(4,17);

test(0,0);
test(2,1);