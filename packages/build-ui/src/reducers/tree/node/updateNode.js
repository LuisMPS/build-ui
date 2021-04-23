
// Action will have payload containing
// reference id to node to update, and
// props to update.
function updateNode(state, action) {
    const {id, props = {}} = action.payload;
    // State mutations
    Object.entries(props).map(([prop, value]) => {
        state.byIds[id].props[prop] = value;
    })
}

const reducer = {
    reducer: updateNode,
}

export default reducer;