function startIndex(state, action) {
    const {index, index_list} = action.payload;
    // State mutations
    Object.entries(index).forEach(([name, id])  => {
        state.index[name] = id;
    });
    Object.entries(index_list).forEach(([name, ids])  => {
        let past = state.index_list[name];
        if (past) ids.forEach(id => state.index_list[name].push(id));
        if (!past) state.index_list[name] = ids;
    });
}

const reducer = {
    reducer: startIndex,
}

export default reducer;