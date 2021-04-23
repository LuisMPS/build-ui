function updateMeta(state, action) {
    const {
        id,
        props = {}
    } = action.payload;
    // State mutations
    Object.entries(props).map(([prop, value]) => {
        state.meta[id][prop] = value;
    });
}

const reducer = {
    reducer: updateMeta,
}

export default reducer;