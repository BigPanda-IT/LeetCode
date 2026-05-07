/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {

    let answer=[];
    let leftsum=[];
    let rightsum=[];

    for (let i=0; i<nums.length; i++) {
        if (i === 0) {
            leftsum[i] = 0;
        }
        else {
            leftsum[i] = nums[i-1] + leftsum[i-1];
        }
    }

    for (let j=nums.length-1; j>-1; j--) {
        if (j === nums.length -1) {
            rightsum[j] = 0;
        }
        else {
            rightsum[j] = nums[j+1] + rightsum[j+1];
        }
    }

    for (let k=0; k<nums.length; k++) {
        answer[k] = Math.abs(leftsum[k] - rightsum[k]);
    }

    return answer;

};