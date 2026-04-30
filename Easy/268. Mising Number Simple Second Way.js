/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let sorted_nums = nums.sort((a,b) => a-b);
    
    if (sorted_nums[0] !==0) {
        return 0;
    }

    for (let i=0; i<sorted_nums.length; i++) {
        if (sorted_nums[i+1] - sorted_nums[i] > 1 ) {
            return sorted_nums[i]+1;
        }
    }

    return sorted_nums.length;
};
