function addListIndex(state, action) {
    const {id, name} = action.payload;
    const past = state.index_list[name];
    // State mutations
    if (past) state.index_list[name].push(id);
    if (!past) state.index_list[name] = [id];
}

const reducer = {
    reducer: addListIndex
}

export default reducer;