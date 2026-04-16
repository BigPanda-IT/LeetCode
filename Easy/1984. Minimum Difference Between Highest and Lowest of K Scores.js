/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    nums.sort((a, b) => a - b);
    let minsum = Infinity;
    let min;

    for (let i=0 ; i<nums.length; i++) {
        min = nums[i + k - 1] - nums[i];
        if (min < minsum) {
            minsum = min;
        }
    }
    return minsum;
};