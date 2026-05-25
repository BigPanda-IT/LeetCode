/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let map = new Map();

    let counter=0;

    for (let i=0; i<dominoes.length; i++) {
        dominoes[i].sort();
    }

    for (let i=0; i<dominoes.length; i++) {
        let val = JSON.stringify(dominoes[i]);
        let curr =  map.get(val) ?? 0;
        map.set(val, curr + 1);
    }

    for (let symb of map) {
        let value = symb[1];
        if (value > 1) {
            counter += (value * (value - 1)) / 2;
        }
    }

    return counter;
};