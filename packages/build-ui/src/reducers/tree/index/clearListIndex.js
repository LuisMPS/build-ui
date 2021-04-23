function clearListIndex(state, action) {
    const {name} = action.payload;
    // State mutations
    state.index_list[name] = [];
}

const reducer = {
    reducer: clearListIndex,
}

export default reducer;