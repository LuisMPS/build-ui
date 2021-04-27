function updateMeta(state, action) {
    const {
        id,
        meta = {}
    } = action.payload;
    // State mutations
    Object.entries(meta).map(([prop, value]) => {
        state.meta[id][prop] = value;
    });
}

const reducer = {
    reducer: updateMeta,
}

export default reducer;