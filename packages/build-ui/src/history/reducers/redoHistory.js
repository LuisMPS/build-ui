import {applyPatches, enablePatches} from "immer";
import {getCanRedo} from "../selectors/history";

enablePatches();

export default function redoHistory(state, action) {
    const history = state.history;
    const version = history.version;
    const canRedo = getCanRedo(state);
    // Do nothing if cannot redo
    if (!canRedo) {
        return;
    }
    // Redo history
    else if (canRedo) {
        const timeline = history.timeline;
        const redo = timeline[version].redo;
        state.history.version += 1;
        state.history.present = applyPatches(state.history.present, redo);
    }
}