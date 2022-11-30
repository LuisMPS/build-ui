import {deepMerge} from "../../utils/object"

function updateTransfer(state, action) {
    const previousTranfser = {
        data: state.data,
        meta: state.meta,
        type: state.type
    };
    deepMerge(previousTranfser, action.payload);
    // State mutations
    state.data = previousTranfser.data || state.data;
    state.meta = previousTranfser.meta || state.meta;
    state.type = previousTranfser.type || state.type;
}

const reducer = {
    reducer: updateTransfer
}

export default reducer;