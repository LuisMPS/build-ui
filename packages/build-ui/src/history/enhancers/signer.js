import commitHistory, {creator} from "../reducers/commitHistory"

function signer(reducer) {
    return function(state, action) {
        // State mutations
        // Commit (sign) any batched actions.
        const commit = creator({});
        commitHistory(state, commit);
        reducer(state, action);
    }
}

export default signer;