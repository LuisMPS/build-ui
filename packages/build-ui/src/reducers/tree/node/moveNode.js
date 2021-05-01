import {getParentNode, getNodeById} from "../../../selectors/tree";
import {isDefined} from "../../../utils/object";

// Action will have payload containing
// branch to create. Branch will have 
// root, panel, transfer reference
// id nodes and a dictionary containing
// branch nodes data.
function moveNode(state, action) {
    const {id, targetId, position} = action.payload;
    const parent = getParentNode(state, id);
    const target = getNodeById(state, targetId);
    const parentChildIds = parent.childIds;
    const from = parentChildIds.indexOf(id);
    const targetChildIds = target.childIds;
    const insertPos = isDefined(position)
        ? position
        : targetChildIds.length;
    // State mutations (Order is important)
    state.byIds[parent.id].childIds.splice(from, 1);
    state.byIds[targetId].childIds.splice(insertPos, 0, id);
    state.byIds[id].parentId = targetId;
}

const reducer = {
    reducer: moveNode,
}

export default reducer;