import {getNodeById} from "../../../selectors/tree";
import {isDefined} from "../../../utils/object";

// Action will have payload containing
// reference id to action node
// (i.e. the node that will be moved)
// and shift position of 
// node relative to parent
function intershiftNode(state, action) {
    const {id, absolute, relative} = action.payload;
    const node = getNodeById(state, id);
    const parent = getNodeById(state, node.parentId);
    const parentChildIds = parent.childIds;
    const size = parentChildIds.length
    const from = parentChildIds.indexOf(id);
    const insertPos = isDefined(absolute) ? absolute
        : isDefined(relative) ? from + relative
        : size; 
    // State mutations
    state.byIds[parent.id].childIds.splice(from, 1)
    state.byIds[parent.id].childIds.splice(
        insertPos, 0, id
    );
}

const reducer = {
    reducer: intershiftNode,
}

export default reducer;