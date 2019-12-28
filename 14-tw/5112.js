/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function(num) {
    let num16Str = Number(num).toString(16).toUpperCase();
    num16Str = num16Str.replace(/0/g,'O');
    num16Str = num16Str.replace(/1/g,'I');
    const re = new RegExp(/^[A-Z]+$/);
    if(!re.test(num16Str)){
        return 'ERROR';
    }
    return num16Str;
};

console.log(toHexspeak("257"));
console.log(toHexspeak("3"));
console.log(toHexspeak("892759744797"));

