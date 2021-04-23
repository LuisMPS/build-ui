import {createSlice} from "@reduxjs/toolkit"
import batched from "../enhancers/batched";
import unbatched from "../enhancers/unbatched";
import signer from "../enhancers/signer";
import proxy from "../enhancers/proxy";
import {commitHistory, precommitHistory, redoHistory, undoHistory, restartHistory, configureBatchHistory, configureHistory} from "../reducers";
import {isFunction} from "../utils/function";

const commitReducers = {
    commitHistory: commitHistory,
    precommitHistory: precommitHistory,
}

const historyReducers = {
    redoHistory: redoHistory,
    undoHistory: undoHistory,
    restartHistory: restartHistory,
    configureHistory:  configureHistory,
    configureBatchHistory: configureBatchHistory, 
}

const createVersionedSlice = ({
    name,
    initialState,
    reducers,
    extraReducers,
}) => {
    const history = {
        version: 0,
        present: initialState,
        timeline: [],
    };
    const timer = {
        batchTime: 3000,
        batchTimeLimit: 9000,
    }
    const batch = {
        patches: [],
        configuration: timer,
        past: null,
    }
    const configuration = {
        historyLimit: 9999999,
    }
    const versionedState = {
        history: history,
        batch: batch,
        configuration: configuration,
    };
    const completeReducers = Object.entries(reducers)
    .reduce((completeReducers, [reducer_name, reducer]) => {
        const batched_name = `${reducer_name}/batched`;
        const unbatched_name = `${reducer_name}/unbatched`;
        completeReducers[batched_name] = isFunction(reducer) 
            ? batched(reducer)
            : {...reducer, reducer: batched(reducer.reducer)}
        completeReducers[unbatched_name] = isFunction(reducer) 
            ? unbatched(reducer)
            : {...reducer, reducer: unbatched(reducer.reducer)}
        completeReducers[reducer_name] = isFunction(reducer) 
            ? signer(proxy(reducer))
            : {...reducer, reducer: signer(proxy(reducer.reducer))}
        return completeReducers;
    }, {});
    const signedHistoryReducers = Object.entries(historyReducers)
    .reduce((reducers, [type, reducer]) => {
        reducers[type] = signer(reducer);
        return reducers;
    }, {});
    const versionedReducers = {
        ...completeReducers,
        ...commitReducers,
        ...signedHistoryReducers,
    };
    const slice = createSlice({
        name: name,
        initialState: versionedState,
        reducers: versionedReducers,
        extraReducers: extraReducers,
    });
    const initialExtra = {
        batched: {},
        unbatched: {},
    };
    const extraActions = Object.entries(slice.actions)
    .reduce((extraActions, [actionType, action]) => {
        const typeSplit = actionType.split('/').reverse();
        const [batch, type] = typeSplit;
        if (extraActions[batch]) {
            extraActions[batch][type] = action;
        }
        return extraActions;
    }, initialExtra);

    slice.extraActions = extraActions;
    return slice;
}

export default createVersionedSlice;