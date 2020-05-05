/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
    let size = requirements.length;
    for(let i = 0;i<size;i++){
        requirements[i].push(i);
    }
    let c=0;
    let r=0;
    let h=0;
    let inrSize = increase.length;
    for(let i = 0;i<inrSize;i++){
        let inr = increase[i];
        let tc = inr[0];
        let tr = inr[1];
        let th = inr[2];

        inr[0] += c;
        inr[1] += r;
        inr[2] += h;
        inr.push(size+i+1);
        requirements.push(inr);
    }
    let cmp = function(a,b){
        if(a[0] == b[0] && a[1] == b[1] && a[2] == b[2]){
            return 0;
        } else if (a[0] > b[0] && a[1] > b[1] && a[2] > b[2]){
            
        }
    }
    requirements.sort(;
};