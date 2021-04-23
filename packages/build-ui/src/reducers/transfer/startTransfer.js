function startTransfer(state, action) {
    const {
        data,
        meta,
        type,
    } = action.payload;
    // State mutations
    state.data = data;
    state.meta = meta;
    state.type = type;
}

const reducer = {
    reducer: startTransfer
}

export default reducer;