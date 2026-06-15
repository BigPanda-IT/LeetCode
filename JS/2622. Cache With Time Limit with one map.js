var TimeLimitedCache = function() {
    this.cashe = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let checker = this.cashe.has(key);

    if (checker) {
        let oldtime = this.cashe.get(key).timer;
        clearTimeout(oldtime);
    }

    let timer = setTimeout(() => {
        this.cashe.delete(key);
    }, duration);

    this.cashe.set(key, {value, timer});

    return checker;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let checker = this.cashe.has(key);

    if (checker) {
        return this.cashe.get(key).value;
    }
    else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cashe.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */