export function isFunction(fn) {
    return typeof fn === 'function';
}

export function identity(arg) {
    return arg;
}

export function combine(...funcs) {
    return (...args) => funcs.map((func => func(...args)));
}