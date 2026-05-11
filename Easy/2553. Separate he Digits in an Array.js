/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = [];
    let resarr = [];
    
    for(let i=0; i<nums.length; i++) {
        if (nums[i] > 9) {
            let curval = nums[i];
            let j = 0;
            while (curval > 0) {
                let value = curval % 10;
                arr[j] = value;
                j++;
                curval = Math.floor(curval / 10);
            }
            arr.reverse();
            for (let i=0; i<arr.length; i++) {
                resarr.push(arr[i]);
            }
            arr = [];
        }
        else {
            resarr.push(nums[i]);
        }
    }

    return resarr;

};