export function memoize(fn) {
    let cache = new Map();

    return function(...args) {

        let key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let val = fn(...args);
        cache.set(key, val);
        return val;
    }
}
