/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();
    let count = 1;

    for (let i=0; i<word1.length; i++){
        if (map1.has(word1[i])) {
            map1.set(word1[i], map1.get(word1[i]) + 1);
        }
        else {
            map1.set(word1[i], 1);
        }
    }

    console.log(map1);

    for (let j=0; j<word2.length; j++){
        if (map2.has(word2[j])) {
            map2.set(word2[j], map2.get(word2[j]) + 1);
        }
        else {
            map2.set(word2[j], 1);
        }
    }

    console.log(map2);

    for (let symb1 of map1.keys()) {
        for (let symb2 of map2.keys()) {
            if (symb1 === symb2) {
                if (Math.abs(map1.get(symb1) - map2.get(symb2)) > 3) {
                    return false;
                }
            }
        }
        if (!map2.has(symb1)) {
            if (map1.get(symb1) > 3) {
                return false;
            }
        }
    }

    for (let symb2 of map2.keys()) {
        for (let symb1 of map1.keys()) {
            if (symb2 === symb1) {
                if (Math.abs(map2.get(symb2) - map1.get(symb1)) > 3) {
                    return false;
                }
            }
        }
        if (!map1.has(symb2)) {
            if (map2.get(symb2) > 3) {
                return false;
            }
        }

    }

    return true;

};