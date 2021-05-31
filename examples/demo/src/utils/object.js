import {isFunction} from "./function";

export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
  
export function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                Object.assign(output, { [key]: source[key] });
                else if (isFunction(target[key]))
                output[key] = (...args) => deepMerge(target[key](...args), source[key]);
                else 
                output[key] = deepMerge(target[key], source[key]);
            }
            else if (isFunction(source[key])) {
              if (!(key in target))
                Object.assign(output, { [key]: source[key] });
                else if (isFunction(target[key]))
                output[key] = (...args) => deepMerge(target[key](...args), source[key](...args));
                else 
                output[key] = (...args) => deepMerge(target[key], source[key](...args));
            } 
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return deepMerge(output, ...sources);
}