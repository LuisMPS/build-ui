import produce, {produceWithPatches, enablePatches, original} from "immer"
import proxy from "../enhancers/proxy"

enablePatches();

function batched(reducer) {
    return function(state, action) {
        const present = state.history.present;
        const [_, patches] = produceWithPatches(present, draft => {
            reducer(draft, action);
        });
        // State mutations
        state.batch.past = state.batch.past || produce(
            original(state.history.present), () => {}
        ); 
        state.batch.patches = [
            ...state.batch.patches, 
            ...patches
        ];
        proxy(reducer)(state, action);
    }
}

export default batched;