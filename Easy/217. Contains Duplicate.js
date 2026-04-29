/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const unicnums = new Set(nums);

    return unicnums.size !== nums.length;
};