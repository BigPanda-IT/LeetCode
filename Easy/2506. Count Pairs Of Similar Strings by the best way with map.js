/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    
    if (words.length < 2) return 0;

    let map = new Map();

    for (let word of words) {
        let key = [...new Set(word)].sort().join("");
        map.set(key, (map.get(key) ?? 0) + 1);
    }

    let result = 0;

    for (let val of map.values()) {
        result += val * (val - 1) / 2;
    }

    return result;
};