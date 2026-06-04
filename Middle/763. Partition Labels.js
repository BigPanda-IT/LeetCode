/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let last = {};

    let end = 0;
    let res = [];
    let counter = 0;
    let sum = 0;

    for (let i=0; i<s.length; i++) {
        last[s[i]] = i;
    }

    for (let i=0; i<s.length; i++) {
        end = Math.max(end, last[s[i]]);
        if (end === i) {
            res[counter] = i - sum + 1;
            sum += res[counter];

            counter++;
        }
    }

    return res;

};