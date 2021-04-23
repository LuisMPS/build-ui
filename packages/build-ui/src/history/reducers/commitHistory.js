import {createAction} from "@reduxjs/toolkit";
import {applyPatches, produceWithPatches, enablePatches} from "immer";

enablePatches();

export const creator = createAction('commitHistory');

export default function commitHistory(state, action) {
    const {signature} = action.payload;
    const prevSignature = state.batch.signature;
    if (signature && prevSignature !== signature) return;
    const batch = state.batch;
    const past = batch.past;
    const patches = batch.patches;
    const [_, redo = [], undo = []] = (
        produceWithPatches(past, draft => {
            applyPatches(draft, patches);
        })
    );
    const version = state.history.version;
    const historyLimit = state.configuration.historyLimit;
    const limitExceeded = version + 1 > historyLimit;
    // State mutations
    state.batch.patches = [];
    if (redo.length === 0) return;
    state.history.timeline.length = state.history.version;
    if (limitExceeded) {
        state.history.timeline.shift();
    }
    state.history.timeline.push({undo: undo, redo: redo});
    state.history.version += !limitExceeded ? 1 : 0;
    state.batch.past = null;
    state.batch.signature = null;
}

