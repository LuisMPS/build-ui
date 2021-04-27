function addListIndex(state, action) {
    const {id, name} = action.payload;
    // State mutations
    state.index_list[name] = state.index_list[name] || [];
    state.index_list[name].push(id);
}

const reducer = {
    reducer: addListIndex
}

export default reducer;