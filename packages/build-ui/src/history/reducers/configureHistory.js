function configureHistory(state, action) {
    const {configuration} = action.payload;
    // State mutations
    state.configuration.historyLimit = (
        configuration.historyLimit
    );
}

export default configureHistory;