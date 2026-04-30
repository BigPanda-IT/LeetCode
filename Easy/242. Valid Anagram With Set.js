/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const sdic = {};
    const tdic = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let i=0; i<s.length; i++) {
        // console.log(sdic);
        if (sdic[s[i]] !== undefined) {
            sdic[s[i]] += 1;
        }
        else {
            sdic[s[i]] = 1;
        }
    }

    for (let i=0; i<t.length; i++) {
        if (tdic[t[i]] !== undefined) {
            tdic[t[i]] += 1;
        }
        else {
            tdic[t[i]] = 1;
        }
    }

    // console.log(sdic);
    // console.log(tdic);

    for (let i=0; i<s.length; i++) {
        // console.log(sdic[s[i]]);
        // console.log(tdic[t[i]]);
        if (sdic[s[i]] !== undefined && tdic[s[i]] !== undefined) {
            if ( sdic[s[i]] !== tdic[s[i]]) {
                return false;
            }
        }
        else {
            return false;
        }
    }

    return true;

};