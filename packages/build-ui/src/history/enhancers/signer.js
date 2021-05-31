import commitHistory, {creator} from "../reducers/commitHistory"

function signer(reducer) {
    return function(state, action) {
        const commit = creator();
        // State mutations
        // Commit (sign) any batched 
        // actions.
        commitHistory(state, commit);
        reducer(state, action);
    }
}

export default signer;