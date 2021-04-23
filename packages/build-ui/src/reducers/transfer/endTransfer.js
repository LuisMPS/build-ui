function endTransfer(state, action) {
    // State mutations
    state.data = null;
    state.meta = null;
    state.type = null;
}

const reducer = {
    reducer: endTransfer
}

export default reducer;