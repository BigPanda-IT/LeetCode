/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    let t = 0;
    
    for (let i=columnTitle.length-1; i>-1; i--) {
        res += (columnTitle[i].codePointAt(0) - 64) * (26 ** t);
        t++;
    }

    return res;
};