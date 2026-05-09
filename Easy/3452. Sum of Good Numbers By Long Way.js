/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i-k] === undefined && nums[i+k] === undefined) {
            sum += nums[i];
            console.log(sum);
        }
        else if (nums[i-k] === undefined) {
                if (nums[i] > nums[i+k]) {
                    sum += nums[i];
                    console.log(sum);
                }
        }
        else if (nums[i+k] === undefined) {
                if (nums[i-k] < nums[i]) {
                    sum += nums[i];
                    console.log(sum);
                }
        }
        else {
            if (nums[i] > nums[i-k] && nums[i] > nums[i+k]) {
                sum += nums[i];
                console.log(sum);
            }
        }
    }

    return sum;
};
