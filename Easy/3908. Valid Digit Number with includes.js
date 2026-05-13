/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let str = String(n);

    if (str[0] == x)
        return false;

    return str.slice(1).includes(x);
};