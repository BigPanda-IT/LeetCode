/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {

    let reverseNumber = n.toString().split("").reverse().join("");

    return Math.abs(n - reverseNumber);
};