/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const dictionary = {};
    let count = 0;

    for (let i=0; i<nums.length; i++) {
        if (dictionary[nums[i]] === undefined) {
            dictionary[nums[i]] = 1;
        }
        else {
            dictionary[nums[i]] += 1;
        }
    }

    const keys = Object.keys(dictionary);

    for (let symb of keys) {
        if (dictionary[symb] === 1) {
            return Number(symb);
        }
    }
    
};