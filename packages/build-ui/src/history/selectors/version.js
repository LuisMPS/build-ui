const getSlice = (store, slice) => store[slice];
const getSliceHistory = (store, slice) => getSlice(store, slice).history;
const getSlicePresent = (store, slice) => getSliceHistory(store, slice).present;

const getHistory = state => state.history;
const getPresent = state => getHistory(state).present;

const getBatch = state => state.batch;

const getConfiguration = state => state.configuration;
const getBatchConfiguration = state => getBatch(state).configuration;

export {
    getSlice,
    getSlicePresent,
    getSliceHistory,
    getHistory,
    getPresent,
    getBatch,
    getConfiguration,
    getBatchConfiguration,
}