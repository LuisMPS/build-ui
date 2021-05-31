import produce, {produceWithPatches, enablePatches, original} from "immer"
import proxy from "./proxy"

enablePatches();

// Lazy accumulates changes 
// for given reducer in 
// patches array.

function accumulator(reducer) {
    return function(state, action) {
        const present = state.history.present;
        const [, patches] = produceWithPatches(present, draft => {
            reducer(draft, action);
        });
        // State mutations
        state.batch.past = state.batch.past || produce(
            original(state.history.present), () => {}
        ); 
        state.batch.patches.push(...patches);
        proxy(reducer)(state, action);
    }
}

export default accumulator;