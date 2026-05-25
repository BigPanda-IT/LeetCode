/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {

    let reverse = n.toString().split("").reverse().join("").toString();
    
    return Math.abs(n - reverse);
};