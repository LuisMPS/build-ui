/*
 * These functions work with subset of store 
 * containing value of 'transfer' in store 
 * dictionary.

 * As such, they do not expect to receive
 * the whole store as their first argument,
 * but a value containing only the store's
 * value for 'transfer'
*/

const getTransferData = state => state.data;
const getTransferMeta = state => state.meta;
const getTransferType = state => state.type;

export {
    getTransferData,
    getTransferMeta,
    getTransferType,
};