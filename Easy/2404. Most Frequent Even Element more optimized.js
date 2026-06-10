/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {

    let map = new Map();
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 0) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        }
    }

    if (map.size === 0) return -1;

    let max = 0;

    for (let val of map.values()){
        max = Math.max(val, max);
    }

    let arr = [];

    for (let [key, val] of map.entries()) {
        if (val === max) {
            arr.push(key);
        }
    }

    let min = Infinity;

    for (let i=0; i<arr.length; i++) {
        min = Math.min(min, arr[i]);
    }

    return min;
};