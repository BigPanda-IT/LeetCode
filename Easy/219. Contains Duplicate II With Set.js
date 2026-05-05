/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let set = new Set(nums);

    for (let i=0; i<nums.length; i++) {
        if (Math.abs(set[nums[i]] - i) <= k) {
            return true;
        }
        else {
            set[nums[i]] = i;
        }
    }

    return false;

};