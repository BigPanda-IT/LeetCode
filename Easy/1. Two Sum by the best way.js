/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = new Map();

    for (let i=0; i<nums.length; i++) {
        let needval = target - nums[i];
        if (map.has(needval)) {
            return [map.get(needval), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
};