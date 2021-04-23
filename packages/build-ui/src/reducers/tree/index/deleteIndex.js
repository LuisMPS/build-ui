import {getChildrenById, getMultipleById} from "../../../selectors/tree";
import {filterInPlace} from "../../../utils/array";
import {keys} from "../../../utils/object";

function deleteIndex(state, action) {
    const {id} = action.payload;
    const ids = [...keys(getChildrenById(state, id)), id];
    const nodes = getMultipleById(state, ...ids);
    // State mutations
    Object.keys(state.index).forEach(index => {
        const indexID = state.index[index];
        const isIndex = nodes[indexID];
        if (isIndex) state.index[index] = null;
    });
    Object.keys(state.index_list).forEach(index => {
        const indexList = state.index_list[index];
        const isNotIndex = indexID => !nodes[indexID];
        filterInPlace(indexList, isNotIndex);
    });
}

const reducer = {
    reducer: deleteIndex,
}

export default reducer;