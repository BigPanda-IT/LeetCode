/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {

    let i=1;
    let n = nums.length;
    let j=n-2;
    let leftsum = [0];
    let rightsum = [0];
    let answer = [0];
    let sum_left = 0;
    let sum_right = 0;
    let k = 0;

    
    while (i !== n && j !== -1) {
        sum_left += nums[i-1];
        sum_right += nums[j+1];

        leftsum[i] = sum_left;
        rightsum[i] = sum_right;

        i++;
        j--;
    }

    rightsum.reverse();

    while (k !== n) {
        answer[k] = Math.abs(leftsum[k] - rightsum[k]);
        k++;
    }

    return answer;

};