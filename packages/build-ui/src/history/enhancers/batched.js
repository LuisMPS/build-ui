import accumulator from "./accumulator"

function batched(reducer) {
    return function(state, action) {
        accumulator(reducer)(state, action);
    }
}

export default batched;