import {getChildrenById} from "../../../selectors/tree";
import {keys} from "../../../utils/object";

function deleteMeta(state, action) {
    const {id} = action.payload;
    const nodesIds = [...keys(getChildrenById(state, id)), id];
    // State mutations
    nodesIds.forEach(id => {
        delete state.meta[id]
    });
}

const reducer = {
    reducer: deleteMeta
}

export default reducer;