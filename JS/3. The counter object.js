/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 * 
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
export function createCounter(init) {

    let currval = init;

    return {
        increment() {
            return ++currval;
        },

        decrement() {
            return --currval;
        },

        reset() {
            currval = init;
            return currval;
        }
    }
}; 