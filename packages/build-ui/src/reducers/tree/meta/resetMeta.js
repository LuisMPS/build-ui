function resetMeta(state, action) {
    const meta = state.meta;
    // State mutations
    Object.keys(meta).map(id => {
        state.meta[id] = {}; 
    });
}

const reducer = {
    reducer: resetMeta,
}

export default reducer;