/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    return s.trim().split(/\s+/).slice(-1)[0].length;

};