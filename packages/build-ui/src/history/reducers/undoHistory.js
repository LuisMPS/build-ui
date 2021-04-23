import {applyPatches, enablePatches} from "immer";
import {getCanUndo} from "../selectors/history";

enablePatches();

export default function undoHistory(state, action) {
    const history = state.history;
    const version = history.version;
    const canUndo = getCanUndo(state);
    // Do nothing if cannot undo
    if (!canUndo) {
        return;
    }
    // Undo history
    else if (canUndo) {
        const timeline = history.timeline;
        const undo = timeline[version - 1].undo;
        state.history.version -= 1;
        state.history.present = applyPatches(state.history.present, undo);
    }
}