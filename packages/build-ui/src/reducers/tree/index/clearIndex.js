function clearIndex(state, action) {
    const {name} = action.payload;
    // State mutations
    state.index[name] = null;
}

const reducer = {
    reducer: clearIndex,
}

export default reducer;