export const isInteger = obj =>
    String(Math.floor(Number(obj))) === obj;

export const isNumber = obj => 
    !Number.isNaN(Number.parseFloat(obj));

export const parseNumber = obj => 
    Number.parseFloat(obj);