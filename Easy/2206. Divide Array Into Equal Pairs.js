/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map = new Map();

    for (let i=0; i<nums.length; i++) {
        let curr = map.get(nums[i]) ?? 0;
        map.set(nums[i], curr + 1);
    }

    for (let symb of map.keys()) {
        if (map.get(symb) % 2 !== 0) {
            return false;
        }
    }

    return true;
};