function configureBatchHistory(state, action) {
    const {configuration} = action.payload;
    // State mutations
    state.batch.configuration.batchTimeLimit = (
        configuration.historyBatchTimeLimit
    );
    state.batch.configuration.batchTime = (
        configuration.historyBatchTime
    );
}

export default configureBatchHistory;