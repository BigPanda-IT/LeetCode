/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let mainValue = val;
    let simpleValue;

    let toBe = function(simpleValue) {
        if (mainValue === simpleValue) {
            return true;
        }
        else {
            throw new Error("Not Equal");
        }
    }

    let notToBe = function(simpleValue) {
        if (mainValue !== simpleValue) {
            return true;
        }
        else {
            throw new Error("Equal");
        }
    }

    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */