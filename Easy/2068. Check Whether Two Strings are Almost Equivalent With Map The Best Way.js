/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let symb of word1){
        let currVal = map1.get(symb) ?? 0;
        map1.set(symb, currVal + 1);
    }

    for (let symb of word2){
        let currVal = map2.get(symb) ?? 0
        map2.set(symb, currVal + 1)
    }

    for (let symb1 of map1.keys()) {
        if (map2.has(symb1)) {
            if (Math.abs(map1.get(symb1) - map2.get(symb1)) > 3) {
                return false;
            }
        } 
        else {
            if (map1.get(symb1) > 3) {
                return false;
            }
        }
    }

    for (let symb2 of map2.keys()) {
        if (map1.has(symb2)) {
            if (Math.abs(map2.get(symb2) - map1.get(symb2)) > 3) {
                return false;
            }
        }
        else {
            if (map2.get(symb2) > 3) {
                return false;
            }
        }

    }

    return true;

};