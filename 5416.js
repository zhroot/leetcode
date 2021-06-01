/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(' ');
    for (let i = 0; i <words.length;i++){
        let word = words[i];
        if(word.startsWith(searchWord)){
            return i+1;
        }
    }
    return -1;
};

sentence = "i love eating burger"
searchWord = "burg"

console.log(isPrefixOfWord(sentence, searchWord))

sentence = "this problem is an easy problem"
searchWord = "pro"

console.log(isPrefixOfWord(sentence, searchWord))

sentence = "i am tired"
searchWord = "you"

console.log(isPrefixOfWord(sentence, searchWord))

sentence = "i use triple pillow"
searchWord = "pill"
console.log(isPrefixOfWord(sentence, searchWord))

sentence = "hello from the other side"
searchWord = "they"

console.log(isPrefixOfWord(sentence, searchWord))