/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let set = new Map();

    for (let i=0; i<nums.length; i++) {
        if (set.has(nums[i])) {
            if (Math.abs(set.get(nums[i]) - i) <= k) {
                return true;
            }
            else {
                set.set(nums[i], i);
            }
        }
        else {
            set.set(nums[i], i);
        }
    }

    return false;

};