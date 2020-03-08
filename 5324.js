/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.n = n;
    this.discount = discount;
    // this.products = products;
    // this.prices = prices;
    // this.map = {};
    let map = {};
    for(let i=0;i<products.length;i++){
        map[products[i]] = prices[i];
    }
    this.proMap = map;
    this.disIndex = 0;
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let ret = 0;
    for(let i = 0;i<product.length;i++){
        ret += this.proMap[product[i]] * amount[i];
    }
    this.disIndex += 1;
    if(this.disIndex % this.n == 0){
        ret = ret - (this.discount * ret) / 100;
    }
    return ret;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */


Cashier.prototype.getBillT = function(product, amount) {
    console.log(this.getBill(product, amount));
}

const cashier = new Cashier(3,50,[1,2,3,4,5,6,7],[100,200,300,400,300,200,100]);
cashier.getBillT([1,2],[1,2]);                        // 返回 500.0, 账单金额为 = 1 * 100 + 2 * 200 = 500.
cashier.getBillT([3,7],[10,10]);                      // 返回 4000.0
cashier.getBillT([1,2,3,4,5,6,7],[1,1,1,1,1,1,1]);    // 返回 800.0 ，账单原本为 1600.0 ，但由于该顾客是第三位顾客，他将得到 50% 的折扣，所以实际金额为 1600 - 1600 * (50 / 100) = 800 。
cashier.getBillT([4],[10]);                           // 返回 4000.0
cashier.getBillT([7,3],[10,10]);                      // 返回 4000.0
cashier.getBillT([7,5,3,1,6,4,2],[10,10,10,9,9,9,7]); // 返回 7350.0 ，账单原本为 14700.0 ，但由于系统计数再次达到三，该顾客将得到 50% 的折扣，实际金额为 7350.0 。
cashier.getBillT([2,3,5],[5,3,2]);        