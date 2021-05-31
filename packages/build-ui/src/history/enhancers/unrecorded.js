import proxy from "./proxy";

function unrecorded(reducer) {
    return function(state, action) {
        proxy(reducer)(state, action);
    }
}

export default unrecorded;