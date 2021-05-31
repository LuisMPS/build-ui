import {deepMerge} from "../../../utils/object";

function updateMeta(state, action) {
    const {
        id,
        meta = {}
    } = action.payload;
    // State mutations
    deepMerge(state.meta[id], meta);
}

const reducer = {
    reducer: updateMeta,
}

export default reducer;