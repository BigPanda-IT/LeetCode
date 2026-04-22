/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let alreadyCalled = false;
    let counter=0;

    return function() {
        if (!alreadyCalled) {
            alreadyCalled = true;
            return n;
        }
        else {
            counter +=1;
            return n+counter;
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */