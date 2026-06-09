/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map = new Map();

    for (let i=0; i<s.length; i++) {
        let curr = map.get(s[i]) ?? 0;
        map.set(s[i], curr + 1);
        if (map.get(s[i]) === 2) {
            return s[i];
        }
    }
};