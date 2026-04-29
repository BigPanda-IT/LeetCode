/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dictionary1 = {};
    const dictionary2 = {};

    let i=0;
    let j=0;

    while (i<s.length && j<t.length) {
        if (dictionary1[s[i]] !== undefined &&  dictionary1[s[i]] != t[j]) {
            return false;
        }
        else {

            if (dictionary2[t[j]] !== undefined &&  dictionary2[t[j]] != s[i]) {
                return false;
            }
            else {
                dictionary1[s[i]] = t[j];
                dictionary2[t[j]] = s[i];
                i++;
                j++;
            }
        }
    }

    return true;

};