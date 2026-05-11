/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let counter = 0;
    let currentValue = num;
    
    while (currentValue > 0) {
        let val = currentValue % 10;
        if (num % val === 0) {
            counter ++;
        }
        currentValue = Math.floor(currentValue / 10);
    }
    return counter;
};