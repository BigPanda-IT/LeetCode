/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let res = {};
    let mod = {};
    
    for (let i=0; i<nums.length; i++) {
        if (res[nums[i]] == undefined) {
            res[nums[i]] = 1;
            mod[nums[i]] = i;
        }
        else {
            res[nums[i]] += 1;
            mod[nums[i]] = Math.abs(i - mod[nums[i]]);
            if (mod[nums[i]] <= k && res[nums[i]] >= 2) {
                return true;
            }
            else {
                 mod[nums[i]] = i;
            }
        }
    }

    return false;
};