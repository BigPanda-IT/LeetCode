/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const unic_nums = new Set();

    for (let i=0; i<nums.length; i++) {
        if (unic_nums.has(nums[i])) {
            return true;
        }
        unic_nums.add(nums[i]);
    }
    return false;

};