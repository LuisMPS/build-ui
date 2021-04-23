// import {original} from "immer";

export default function proxy(reducer) {
    return function(state, action) {
        const present = state.history.present;
        reducer(present, action);
    }
}