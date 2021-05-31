import {deepMerge} from "../../../utils/object";

// Action will have payload containing
// reference id to node to update, and
// props to update.
function updateNode(state, action) {
    const {id, props = {}} = action.payload;
    // State mutations
    deepMerge(state.byIds[id].props, props);
}

const reducer = {
    reducer: updateNode,
}

export default reducer;