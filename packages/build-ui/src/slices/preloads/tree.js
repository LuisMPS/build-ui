import {createVersionedState} from "../../history/wrappers/createVersionedSlice";
import {branch, plainBranch} from "../../utils/tree";

// Initial preloaded state
// for tree slice is defined
// here as the return value of
// below function.

// Will call function in configureStore.
// Will not call in createSlice to pass 
// as initialState value.
// @see: https://redux.js.org/recipes/structuring-reducers/initializing-state

const preloadedTree = ({
    initialTree,
    initialTimeline,
    initialVersion,
    initialHistoryLimit,
    initialBatchTime,
    initialBatchTimeLimit,
}) => {
    const initialState = (
        initialTree 
        // Convert passed 
        // initialTree to 
        // flat object, if any.
        ? plainBranch(initialTree)
        // Convert fallback 
        // initialTree to 
        // flat object.
        : plainBranch(branch())
    );
    return createVersionedState({
        initialState: initialState,
        initialTimeline,
        initialVersion,
        initialHistoryLimit,
        initialBatchTime,
        initialBatchTimeLimit,
    })
}

export default preloadedTree;