/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;

    let n2 = new Set(nums2);

    let havarray = nums1.filter(nums => n2.has(nums))

    if (havarray.length > 0) {
        let min = 1000000;
        for (let i=0; i<havarray.length; i++) {
            if (havarray[i] < min) {
                min = havarray[i];
            }
        }
        return min;
    }
    else {
        let minOne = 10000000;
        let minTwo = 10000000;

        for (let i =0; i<nums1.length; i++) {
            if (nums1[i] < minOne) {
                minOne = nums1[i];
            }
        }
        for (let i =0; i<nums2.length; i++) {
            if (nums2[i] < minTwo) {
                minTwo = nums2[i];
            }
        }
        
        if (minOne <= minTwo) {
            return minOne*10+minTwo;
        }
        else {
            return minTwo*10+minOne;
        }
    }
};