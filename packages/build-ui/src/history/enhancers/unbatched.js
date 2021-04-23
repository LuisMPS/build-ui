import produce, {produceWithPatches, enablePatches, original} from "immer"
import commitHistory, {creator} from "../reducers/commitHistory"
import proxy from "../enhancers/proxy"

enablePatches();

function unbatched(reducer) {
    return function(state, action) {
        const present = state.history.present;
        const [_, patches] = produceWithPatches(present, draft => {
            reducer(draft, action);
        });
        // State mutations
        // Commit any batched actions beforehand.
        const commit = creator({});
        commitHistory(state, commit);
        state.batch.past = state.batch.past || produce(
            original(state.history.present), () => {}
        );  
        state.batch.patches = [
            ...state.batch.patches, 
            ...patches
        ];
        // Immediatly commit batched action afterwards.
        commitHistory(state, commit);
        proxy(reducer)(state, action);
    }
}

export default unbatched;