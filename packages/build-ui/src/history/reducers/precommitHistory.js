/**
 * 
 * A precommit is like 'contract' to make
 * sure a commit afterwards has the same
 * signature passed as the precommit 
 * payload. When committing an action
 * later, signature is checked and if
 * they differ, commit is cancelled. 
 * 
 */
function precommitHistory(state, action) {
    const {signature} = action.payload;
    // State mutations
    state.batch.signature = signature;
}

export default precommitHistory;