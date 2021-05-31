export const isNumber = obj => !Number.isNaN(Number.parseFloat(obj));
export const isInteger = obj => isNumber(obj) && Math.floor(obj) === Number.parseFloat(obj);
export const asNumber = obj => isNumber(obj) ? Number.parseFloat(obj) : null;
