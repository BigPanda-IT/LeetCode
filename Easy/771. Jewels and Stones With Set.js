/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const setjewerly = new Set(jewels);

    let count=0;

    for (let i=0; i<stones.length; i++) {
        if (setjewerly.has(stones[i])) {
            count++;
        }
    }


    return count;
};