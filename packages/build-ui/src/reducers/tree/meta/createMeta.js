function startMeta(state, action) {
    const {meta} = action.payload;
    // State mutation
    Object.entries(meta).map(([id, v]) => {
        state.meta[id] = v || {};
    });
}

const reducer = {
    reducer: startMeta,
}

export default reducer;