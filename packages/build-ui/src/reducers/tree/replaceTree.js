// Action will have payload containing
// complete tree to use as state. 
function replaceTree(state, action) {
    const {tree} = action.payload;
    // State mutations
    state.root = tree.root;
    state.byIds = tree.byIds;
    state.meta = tree.meta;
    state.index = tree.index;
    state.index_list = tree.index_list;
}

const reducer = {
    reducer: replaceTree,
}

export default reducer;