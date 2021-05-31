import toPath from 'lodash/toPath';
import clone from 'lodash/clone';
import {shallowEqual} from 'react-redux';
import {isInteger} from './number';
import {isFunction} from './function';

/*
 * Functions below taken from Formik source.
 * Acknowledgement made here as well.
*/

export const isObject = obj =>
    obj !== null && typeof obj === 'object';

export const getIn = (
    obj,
    key,
    fallback,
    p = 0
) => {
    const path = toPath(key);
    while (obj && p < path.length) {
      obj = obj[path[p++]];
    }
    return obj === undefined ? fallback : obj;
}

/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

export const setIn = (
    obj, 
    path, 
    value
) => {
    const res = clone(obj); // this keeps inheritance when obj is a class
    let resVal = res;
    let i = 0;
    const pathArray = toPath(path);
  
    for (; i < pathArray.length - 1; i++) {
        const currentPath = pathArray[i];
        const currentObj = getIn(obj, pathArray.slice(0, i + 1));
  
        if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = clone(currentObj);
        } else {
            const nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] =
            isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    }
  
    // Return original object if new value is the same as current
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
  
    if (value === undefined) {
        delete resVal[pathArray[i]];
    } else {
        resVal[pathArray[i]] = value;
    }
  
    // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
    if (i === 0 && value === undefined) {
        delete res[pathArray[i]];
    }
  
    return res;
}

export function isDefined(object) {
    return (
        object !== undefined && 
        object !== null
    );
}

export function keys(object) {
    return Object.keys(object);
}

export function values(object) {
    return Object.values(object);
}

export function entries(object) {
    return Object.entries(object);
}
  
export function deepEqual(objA, objB) {
    if (objA === objB) return true
  
    if (
      typeof objA !== 'object' ||
      objA === null ||
      typeof objB !== 'object' ||
      objB === null
    ) {
      return false
    }
  
    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)
  
    if (keysA.length !== keysB.length) return false
  
    for (let i = 0; i < keysA.length; i++) {
      if (
        !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
        !shallowEqual(objA[keysA[i]], objB[keysA[i]])
      ) {
        return false
      }
    }
    return true
}

// Function to deep merge 
// two objects.
// Mutates Target object.
export function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                Object.assign(target, { [key]: source[key] });
                else if (isFunction(target[key]))
                target[key] = (...args) => deepMerge(target[key](...args), source[key]);
                else 
                target[key] = deepMerge(target[key], source[key]);
            }
            else if (isFunction(source[key])) {
              if (!(key in target))
                Object.assign(target, { [key]: source[key] });
                else if (isFunction(target[key]))
                target[key] = (...args) => deepMerge(target[key](...args), source[key](...args));
                else 
                target[key] = (...args) => deepMerge(target[key], source[key](...args));
            } 
            else {
                Object.assign(target, { [key]: source[key] });
            }
        });
    }
    return deepMerge(target, ...sources);
}
