/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let str = String(n);

    if (str[0] == x)
        return false;

    for (let i=1; i<str.length; i++) {
        if (str[i] == x) 
            return true;
    }

    return false;
};