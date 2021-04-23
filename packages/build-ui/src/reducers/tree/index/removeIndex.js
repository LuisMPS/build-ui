function removeIndex(state, action) {
    const {id, name} = action.payload;
    const index = state.index[name];
    const isIndex = (index && index === id);
    // State mutations
    if (isIndex) state.index[name] = null;
}

const reducer = {
    reducer: removeIndex,
}

export default reducer;