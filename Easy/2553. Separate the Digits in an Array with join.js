/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
    let res = nums.join("");
    let resarr = [];

    for (let i=0; i<res.length; i++) 
        resarr.push(Number(res[i]));

    return resarr;

};