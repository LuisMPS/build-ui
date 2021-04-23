import {getNodeById} from "../../../selectors/tree";
import {isDefined} from "../../../utils/object";

// Action will have payload containing
// branch to create. Branch will have 
// root, panel, transfer reference
// id nodes and a dictionary containing
// branch nodes data.
function createNode(state, action) {
    const {node, targetId, position} = action.payload;
    const rootId = node.root;
    const root = node.byIds[rootId];
    const rootParentId = targetId;
    const target = getNodeById(state, targetId);
    const targetChildIds = target.childIds;
    const insertPos = isDefined(position)
        ? position 
        : targetChildIds.length;
    // State mutations (Order is important)
    Object.entries(node.byIds).forEach(([id, v]) => {
        state.byIds[id] = v;
    });
    state.byIds[targetId].childIds.splice(
        insertPos, 0, rootId
    );
    state.byIds[rootId] = {
        ...root, 
        parentId: rootParentId
    }
}

const reducer = {
    reducer: createNode,
}

export default reducer;
