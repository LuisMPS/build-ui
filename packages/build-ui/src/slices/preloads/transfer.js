// Initial preloaded state
// for transfer slice is defined
// here as the return value of
// below function.

// Will call function in createSlice.
// Will not call in configureStore to
// pass as preloadedState value.
// @see: https://redux.js.org/recipes/structuring-reducers/initializing-state

const preloadedTransfer = () => ({
    data: null,
    meta: null,
    type: null,
});

export default preloadedTransfer;