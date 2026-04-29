/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const unicnums = new Set();

    return unicnums.size !== nums.length;
};