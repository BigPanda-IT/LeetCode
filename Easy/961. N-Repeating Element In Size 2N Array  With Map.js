/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map = new Map();
    let count = 1;

    for (let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            count = map.get(nums[i]) + 1;
            map.set(nums[i], count);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    console.log(map);

    for (let symb of map.keys()) {
        console.log(symb);
        if (map.get(symb) === nums.length / 2) {
            return symb;
        }
    }
};