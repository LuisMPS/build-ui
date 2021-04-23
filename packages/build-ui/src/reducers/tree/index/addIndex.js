function addIndex(state, action) {
    const {id, name} = action.payload;
    // State mutations
    state.index[name] = id;
}

const reducer = {
    reducer: addIndex
}

export default reducer;