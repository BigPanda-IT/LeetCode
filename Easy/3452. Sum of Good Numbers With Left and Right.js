/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {

    let sum = 0;

    for (let i=0; i<nums.length; i++) {
        let left = nums[i-k] ?? (nums[i] - 1);
        let right = nums[i+k] ?? (nums[i] - 1);

        if (nums[i] > left && nums[i] > right) {
            sum += nums[i];
        }
    }

    return sum;

};