/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {

    let result = 0;
    
    for (let i=0; i<words.length-1; i++) {
        let mainset = new Set(words[i].split(""));
        for (let j=i+1; j<words.length; j++) {
            let currset = new Set(words[j].split(""));
            let counter = 0;
            if (mainset.size === currset.size){
                for (let symb of mainset) {
                    if (currset.has(symb)){
                        counter++;
                    }
                }
                if (counter === mainset.size) {
                    result++;
                }
            }
        }
    }

    return result;
};