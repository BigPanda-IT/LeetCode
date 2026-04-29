/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res=0;

    const dictionary={
        "I": 1,
        "V": 5,
        "X": 10, 
        "L": 50, 
        "C": 100,
        "D": 500, 
        "M": 1000,
    };

    for (let i=0; i<s.length; i++) {

        let next=dictionary[s[i+1]];
        let prev=dictionary[s[i]];

        if (next > prev) {
            res+= (next-prev);
            i++;
        }
        else {
            res+=prev;
        }
    }

    return res;
};