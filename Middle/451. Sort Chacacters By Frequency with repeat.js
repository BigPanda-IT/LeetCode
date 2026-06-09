/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    let map = new Map();

    for (let i=0; i<s.length; i++) {
        let curr = map.get(s[i]) ?? 0;
        map.set(s[i], curr + 1);
    }

    let arr = [];

    for (let [key, val] of map) {
        arr.push([key, val]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    let newstring = "";

    for (let i=0; i<arr.length; i++) {
        newstring += arr[i][0].repeat(arr[i][1]);
    }

    return newstring;

};