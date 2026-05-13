/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {

    let reverseNumber = String(n).split("").reverse().join("");

    return Math.abs(n - reverseNumber);
};