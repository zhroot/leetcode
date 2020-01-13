/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.characters = characters;
    this.strLen = characters.length;
    this.combinationLength = combinationLength;
    this.indexArr = new Array(combinationLength);
    this.nextStr = characters.substring(0,combinationLength);
    for(let i = 0;i<combinationLength;i++){
        this.indexArr[i] = i;
    }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    const ret = this.nextStr;
    let find = false;
    for(let j=this.combinationLength-1,k=0;j>=0;j--,k++){
        if(this.indexArr[j] + k <this.strLen-1){
            this.indexArr[j] = this.indexArr[j] + 1;
            for(let i = j+1;i<this.combinationLength;i++){
                this.indexArr[i] = this.indexArr[i-1]+1;
            }
            find = true;
            break;
        }
    }
    if(!find){
        this.nextStr = null;
    } else {
        let strArray = "";
        for(let i=0;i<this.combinationLength;i++){
            strArray += this.characters[this.indexArr[i]];
        }
        this.nextStr = strArray;
    }
    return ret;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.nextStr != null;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var obj = new CombinationIterator("abcdefg",2)
//var param_1 = obj.next()
//var param_2 = obj.hasNext()
while(obj.hasNext()){
    console.log(obj.next());
}