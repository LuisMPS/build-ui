export default function restartHistory(state) {
    // State mutations
    state.history.version = 0;
    state.history.timeline = [];
    state.batch.patches = [];
    state.batch.past = null;
}