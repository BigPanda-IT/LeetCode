/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sdic = {};
    const tdic = {};

    if (s.length !== t.length)
        return false;

    for (let symb of s) {
        sdic[symb] = sdic[symb] ?? 0;
        sdic[symb] += 1;
    }

    for (let symb of t) {
        tdic[symb] = tdic[symb] ?? 0;
        tdic[symb] += 1;
    }

    const keys1 = Object.keys(sdic);
    const keys2 = Object.keys(tdic);

    if (keys1.length !== keys2.length)
        return false;

    for (let symb of keys1) 
        if (sdic[symb] !== tdic[symb])
            return false

    return true;
};