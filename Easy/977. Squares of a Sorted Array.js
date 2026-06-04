/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = nums.map(x => x**2).sort((a,b) => a - b);

    return res;
};