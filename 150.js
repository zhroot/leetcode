
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    function calc(stack,token){
        const v2 = stack.pop();
        const v1 = stack.pop();
        const val = eval(`${v1} ${token} ${v2}`);
        stack.push(Math.trunc(val));
    }
    let stack = [];
    for(let i = 0;i < tokens.length;i++) {
        const token = tokens[i];
        switch(token){
            case '+':
            case '-':
            case '/':
            case '*':
                calc(stack,token)
                break;
            default:
                stack.push(parseInt(token));
        }
    }
    return stack.pop();
};