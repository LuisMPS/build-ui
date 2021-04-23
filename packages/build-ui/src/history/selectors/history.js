// Selectors expect to receive
// whole versioned slice.

const getCanUndo = state => (
    // History has previous
    state.history.version !== 0 || 
    // Batch has elements
    state.batch.patches.length > 0
);

const getCanRedo = state => (
    // History has next
    state.history.version !== state.history.timeline.length
);

export {
    getCanUndo,
    getCanRedo,
}