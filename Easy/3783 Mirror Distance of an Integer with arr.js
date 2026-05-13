/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {

    let currentNumber = n;
    let arr=[];

    while (currentNumber > 0) {
        let pn = currentNumber % 10;
        arr.push(pn);
        currentNumber = Math.floor(currentNumber/10);
    }

    reverseNumber = arr.join("");

    let result = Math.abs(n - reverseNumber);

    return result;
};