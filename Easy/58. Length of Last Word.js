/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let count = 0;
    let i = s.length-1;

    while (s[i] === ' ') {
        i--;
    }

    while (s[i] !== ' ') {
        count++;
        i--;
    }

    return count;
};