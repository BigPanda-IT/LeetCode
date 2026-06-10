/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {

    let result = 0;
    
    let set_words = []
    for (let word of words) {
        let chars = new Set(word.split(""));
        set_words.push(chars);
    }

    for (let i=0; i<words.length-1; i++) {
        let set1 = set_words[i];
        for (let j=i+1; j<words.length; j++) {
            let set2 = set_words[j];
            if (set1.size === set2.size && set1.difference(set2).size === 0) {
                result++;
            }
        }
    }

    return result;
};