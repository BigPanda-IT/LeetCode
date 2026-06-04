/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let res = [];

    let newString = s.split(" ");

    for (let i=0; i<newString.length; i++) {
        let val = newString[i].split("").reverse().join("");
        res.push(val);
    }

    return res.join(" ");
};