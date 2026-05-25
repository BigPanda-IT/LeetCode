/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    let arr = sentence.split(" ");

    if (arr.length === 1) {
        let str = arr[0].toString();
        if (str.charAt(0) !== str.charAt(str.length - 1)) {
            return false;
        }
    }

    for (let i=1; i<arr.length; i++) {
        let end = arr[i-1].toString();
        let start = arr[i].toString();
        if (end.charAt(end.length - 1) !== start.charAt(0)) {
            return false;
        }
    }

    let endOfarr = arr[arr.length -1].toString();
    let startOfarr = arr[0].toString();

    if (endOfarr.charAt(endOfarr.length - 1) !== startOfarr.charAt(0)) {
        return false;
    }

    return true;
};