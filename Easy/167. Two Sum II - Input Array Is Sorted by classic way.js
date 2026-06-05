/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();

    for (let i=0; i<numbers.length; i++) {
        let needval = target - numbers[i];
        if (!map.has(needval)) {
            map.set(numbers[i], i);
        }
        else {
            return [ map.get(needval) + 1, i + 1];
        }
    }
};