/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let ss = s.split('').sort().join('');
    let ts = t.split('').sort().join('');

    for (let i=0; i<ss.length; i++) {
        console.log(ss[i]);
        console.log(ts[i]);
        if (ss[i] !== ts[i]) {
            return false;
        }
    }
    return true;

};