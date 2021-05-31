import commitHistory, {creator} from "../reducers/commitHistory"
import accumulator from "./accumulator";

function unbatched(reducer) {
    return function(state, action) {
        const commit = creator();
        // Commit any batched actions 
        // beforehand.
        commitHistory(state, commit);
        // Execute reducer with given 
        // action. Accumulate patches 
        // for reducer.
        accumulator(reducer)(state, action);
        // Immediatly commit accumulated
        // patches afterwards.
        commitHistory(state, commit);
    }
}

export default unbatched;