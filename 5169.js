/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let t1 = new Date(date1);
    let t2 = new Date(date2);
    return Math.abs(Math.trunc((t2-t1)/(24*60*60*1000))); 
};
let date1 = '1971-01-01';
let date2 = '2100-12-31';
console.log(daysBetweenDates(date1,date2));

date1 = "2019-06-29";
date2 = "2019-06-30"
console.log(daysBetweenDates(date1,date2));

date1 = "2020-01-15";
date2 = "2019-12-31"

console.log(daysBetweenDates(date1,date2));
