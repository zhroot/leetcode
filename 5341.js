
var ProductOfNumbers = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.list.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let len = this.list.length;
    let ret = 1;
    for(let i = 0;i<k;i++){
        ret *= this.list[len-i-1];
    }
    return ret;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

var obj = new ProductOfNumbers();
for(let i =0;i<10000;i++){
    obj.add(10);
}

for(let i =0;i<30000;i++){
    obj.getProduct(10000)
}
