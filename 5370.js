var UndergroundSystem = function() {
    this.stationMap = {}
    this.records = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.records[id] = {
        s:stationName,
        t
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let info = this.records[id];
    if(this.stationMap[info.s] == null){
        this.stationMap[info.s] = {}
    } 
    if(this.stationMap[info.s][stationName] == null){
        this.stationMap[info.s][stationName] = {
            c:1,
            v:t-info.t
        }
    } else {
        this.stationMap[info.s][stationName].v += t-info.t;
        this.stationMap[info.s][stationName].c +=1 ;
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    return this.stationMap[startStation][endStation].v / this.stationMap[startStation][endStation].c;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

var obj = new UndergroundSystem()
obj.checkIn(45,"Leyton",3)
obj.checkIn(32,"Paradise",8)
obj.checkIn(27,"Leyton",10)

obj.checkOut(45,"Waterloo",15)
obj.checkOut(27,"Waterloo",20)
obj.checkOut(32,"Cambridge",22)


console.log(obj.getAverageTime("Paradise","Cambridge"))

console.log(obj.getAverageTime("Leyton","Waterloo"))

obj.checkIn(10,"Leyton",24)
console.log(obj.getAverageTime("Leyton","Waterloo"))

obj.checkOut(10,"Waterloo",38)

console.log(obj.getAverageTime("Leyton","Waterloo"))


