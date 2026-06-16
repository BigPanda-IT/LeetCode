// Ваш полифил для метода replaceAll у строк

String.prototype.replaceAll = function(pattern, replacement) {
    let newPattern = pattern;

    if (typeof pattern === 'symbol') {
        throw new TypeError('Cannot convert a Symbol value to a string')
    }

    if (pattern instanceof RegExp && !pattern.flags.includes('g')) {
        throw new TypeError('String.prototype.replaceAll called with a non-global RegExp argument');
    }

    if (typeof pattern === 'string') {
        const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        newPattern = new RegExp(escapedPattern, 'g');
    }

    return this.replace(newPattern, replacement);
}