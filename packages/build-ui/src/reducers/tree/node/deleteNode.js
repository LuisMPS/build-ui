import {getChildrenById, getParentNode} from "../../../selectors/tree";
import {keys} from "../../../utils/object";

// Action will have payload containing
// reference id to child. Child id will 
// be deleted, cascading down the tree 
// deleting all subchilds under. Child id
// will be removed from parent's child list.
function deleteNode(state, action) {
    const {id} = action.payload;
    const nodesIds = [...keys(getChildrenById(state, id)), id];
    const parent = getParentNode(state, id);
    // State mutations
    nodesIds.forEach(id => {
        if (state.root === id) state.root = null;
        delete state.byIds[id]
    });
    if (parent) {
        const childIndex = parent.childIds.indexOf(id);
        state.byIds[parent.id].childIds.splice(childIndex, 1);
    }
}

const reducer = {
    reducer: deleteNode,
}

export default reducer;