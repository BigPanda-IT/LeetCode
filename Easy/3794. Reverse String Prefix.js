/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {

    let partOfString = s.substring(0, k);

    let t = partOfString.split("").reverse().join("");

    let result = s.replace(partOfString, t);

    return result;
};