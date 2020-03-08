
var TweetCounts = function() {
    this.table = {};
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if(!this.table[tweetName]){
        this.table[tweetName] = {t:[],s:false};
    } 
    this.table[tweetName].t.push(time);
    this.table[tweetName].s = true;
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    if(!this.table[tweetName]){
        // console.log([])
        return [];
    }
    if(this.table[tweetName].s){
        this.table[tweetName].t.sort();
        this.table[tweetName].s = false;
    }
    const curArr = this.table[tweetName].t;
    let seek = 60;
    if(freq == 'hour'){
        seek = 3600;
    } else if(freq == 'day'){
        seek = 3600 * 24;
    }


    let size = Math.floor((endTime - startTime) / seek) + 1;

    let retArr = new Array(size);
    retArr.fill(0);
    for(let i = 0 ;i < curArr.length;i ++){
        if(curArr[i] >= startTime && curArr[i] <= endTime){
                const index = Math.floor((curArr[i] - startTime) / seek);
                retArr[index] +=1;
        }
    }
    // console.log(retArr);
    return retArr;
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */

var tweetCounts = new TweetCounts()
/*
tweetCounts.recordTweet("tweet3", 0);
tweetCounts.recordTweet("tweet3", 60);
tweetCounts.recordTweet("tweet3", 10);                             // "tweet3" 发布推文的时间分别是 0, 10 和 60 。
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59); // 返回 [2]。统计频率是每分钟（60 秒），因此只有一个有效时间间隔 [0,60> - > 2 条推文。
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 1, 59); // [1]
tweetCounts.getTweetCountsPerFrequency("day", "tweet3", 56, 1220); // [1]
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60); // 返回 [2,1]。统计频率是每分钟（60 秒），因此有两个有效时间间隔 1) [0,60> - > 2 条推文，和 2) [60,61> - > 1 条推文。 
tweetCounts.recordTweet("tweet3", 120);                            // "tweet3" 发布推文的时间分别是 0, 10, 60 和 120 。
tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // 返回 [4]。统计频率是每小时（3600 秒），因此只有一个有效时间间隔 [0,211> - > 4 条推文。

*/


tweetCounts.recordTweet("tweet0",99);
tweetCounts.recordTweet("tweet1",80);
tweetCounts.recordTweet("tweet2",29);
tweetCounts.recordTweet("tweet3",81);
tweetCounts.recordTweet("tweet4",56);
tweetCounts.getTweetCountsPerFrequency("day","tweet4",56,2667);
tweetCounts.recordTweet("tweet1",56);
tweetCounts.recordTweet("tweet0",96);
tweetCounts.recordTweet("tweet4",35);
tweetCounts.recordTweet("tweet1",51);
tweetCounts.recordTweet("tweet2",45);
tweetCounts.recordTweet("tweet0",74);
tweetCounts.recordTweet("tweet1",63);
