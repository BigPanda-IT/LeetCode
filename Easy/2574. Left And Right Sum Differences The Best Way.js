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
    let k = 0;

    
    while (i !== n && j !== -1) {
        leftsum[i] = nums[i-1] + leftsum[i-1];
        rightsum[i] = nums[j+1] +  rightsum[i-1];

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