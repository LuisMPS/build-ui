// Action will have payload containing
// reference id to node to update, and
// rewrite props.
function rewriteNode(state, action) {
   const {id, props = {}} = action.payload;
   // State mutations
   state.byIds[id].props = props;
}

const reducer = {
    reducer: rewriteNode,
}

export default reducer;
