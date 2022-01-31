import {createAction} from "@reduxjs/toolkit";
import {applyPatches, produceWithPatches, enablePatches, original} from "immer";

enablePatches();

export const creator = createAction('commitHistory');

export default function commitHistory(state, action) {
    const batch = state.batch;
    const past = batch.past;
    const patches = batch.patches;
    const [, redo, undo] = (
        produceWithPatches(past, draft => {
            applyPatches(draft, patches);
        })
    );
    const version = state.history.version;
    const historyLimit = state.configuration.historyLimit;
    const limitExceeded = version + 1 > historyLimit;
    // State mutations
    state.batch.patches = [];
    state.batch.past = null;
    if (patches.length === 0) return;
    if (!redo || redo.length === 0) return;
    state.history.timeline.length = state.history.version;
    if (limitExceeded) {
        state.history.timeline.shift();
    }
    state.history.timeline.push({undo: undo, redo: redo});
    state.history.version = state.history.timeline.length;
}


