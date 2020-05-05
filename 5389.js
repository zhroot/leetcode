/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    let tables = {}
    let foods = {}
    let size = orders.length;
    for(let i = 0;i<size;i++){
        let tab = orders[i][1]
        let food = orders[i][2]
        foods[food] = 0
        if(tables[tab] == null){
            tables[tab] = {}
        }
        if(tables[tab][food] == null){
            tables[tab][food] = 0
        }
        tables[tab][food] += 1
    }
    let tabNos = Object.keys(tables);
    tabNos.sort((a,b)=> a-b )
    let foodName = Object.keys(foods)
    foodName.sort()
    let ret = [];
    let header = ["Table"].concat(foodName)
    ret.push(header);
    for(let i = 0;i<tabNos.length;i++){
        let no = tabNos[i];
        let tmp = [no]
        let table = tables[no]
        for(let j = 0;j<foodName.length;j++){
            if(table[foodName[j]]){
                tmp.push(table[foodName[j]].toString())
            } else {
                tmp.push("0")
            }
        }
        ret.push(tmp)
    }
    return ret;
};

orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
console.log(displayTable(orders))