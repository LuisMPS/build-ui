function toggleIndex(state, action) {
    const {id, name} = action.payload;
    const index = state.index[name];
    const isIndex = (index && index === id);
    // State mutations
    if (isIndex) state.index[name] = null;
    if (!isIndex) state.index[name] = id;
}

const reducer = {
    reducer: toggleIndex,
}

export default reducer;