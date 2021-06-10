import {useDispatch} from "react-redux";
import {addIndexBatched, addIndexUnbatched, addIndexUnrecorded, addListIndexBatched, addListIndexUnbatched, addListIndexUnrecorded, clearIndexBatched, clearIndexUnbatched, clearIndexUnrecorded, clearListIndexBatched, clearListIndexUnbatched, clearListIndexUnrecorded, commitHistory, intershiftNodeBatched, intershiftNodeUnbatched, intershiftNodeUnrecorded, moveNodeBatched, moveNodeUnbatched, moveNodeUnrecorded, removeIndexBatched, removeIndexUnbatched, removeIndexUnrecorded, removeListIndexBatched, removeListIndexUnbatched, removeListIndexUnrecorded, rewriteNodeBatched, rewriteNodeUnbatched, rewriteNodeUnrecorded, toggleIndexBatched, toggleIndexUnbatched, toggleIndexUnrecorded, toggleListIndexBatched, toggleListIndexUnbatched, toggleListIndexUnrecorded, updateMetaBatched, updateMetaUnbatched, updateMetaUnrecorded, updateNodeBatched, updateNodeUnbatched, updateNodeUnrecorded} from "../slices/tree";
import {useCreator, useDeleter} from "./useComposed";
import {setIn} from "../utils/object";
import useBuilderContext from "./useBuilderContext";

const useActions = () => {
    const dispatch = useDispatch();
    const context = useBuilderContext();
    const batcher = context.batcher;
    const creator = useCreator();
    const deleter = useDeleter();
    // Payload extractors
    const movePayload = move => ({
        targetId: move.targetId,
        id: move.id,
        position: move.position,
    });
    const shiftPayload = shift => ({
        id: shift.id,
        absolute: shift.absolute,
        relative: shift.relative,
    });
    const updatePayload = update => {
        const props = update.props;
        const _props = Object.keys(props)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            props[prop]
        ), {});
        return ({
            id: update.id,
            props: _props,
        });
    }
    const rewritePayload = rewrite => {
        const props = rewrite.props;
        const _props = Object.keys(props)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            props[prop]
        ), {});
        return ({
            id: rewrite.id,
            props: _props,
        });
    }
    const metaUpdatePayload = update => {
        const meta = update.meta;
        const _meta = Object.keys(meta)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            meta[prop]
        ), {});
        return ({
            id: update.id,
            meta: _meta,
        });
    };
    const indexAddPayload = add => ({
        id: add.id,
        name: add.name,
    });
    const listIndexAddPayload = add => ({
        id: add.id,
        name: add.name,
    });
    const indexRemovePayload = remove => ({
        id: remove.id,
        name: remove.name
    });
    const listIndexRemovePayload = remove => ({
        id: remove.id,
        name: remove.name
    });
    const indexTogglePayload = toggle => ({
        id: toggle.id,
        name: toggle.name
    });
    const listIndexTogglePayload = toggle => ({
        id: toggle.id,
        name: toggle.name
    });
    const indexClearPayload = clear => ({
        name: clear.name
    });
    const listIndexClearPayload = clear => ({
        name: clear.name
    });
    // Time batched actions
    function triggerCreateTimeBatched(create) {
        creator.handleCreateBatched(create);
        batcher.refresh();
    }
    function triggerDeleteTimeBatched(deleted) {
        deleter.handleDeleteBatched(deleted);
        batcher.refresh();
    }
    function triggerMoveTimeBatched(move) {
        dispatch(moveNodeBatched(
            movePayload(move)
        ));
        batcher.refresh();
    }
    function triggerShiftTimeBatched(shift) {
        dispatch(intershiftNodeBatched(
            shiftPayload(shift)
        ));
        batcher.refresh();
    }
    function triggerUpdateTimeBatched(update) {
        dispatch(updateNodeBatched(
            updatePayload(update)
        ));
        batcher.refresh();
    }
    function triggerRewriteTimeBatched(rewrite) {
        dispatch(rewriteNodeBatched(
            rewritePayload(rewrite)
        ));
        batcher.refresh();
    }
    function triggerMetaUpdateTimeBatched(update) {
        dispatch(updateMetaBatched(
            metaUpdatePayload(update)
        ));
        batcher.refresh();
    }
    function triggerIndexAddTimeBatched(add) {
        dispatch(addIndexBatched(
            indexAddPayload(add)
        ));
        batcher.refresh();
    }
    function triggerListIndexAddTimeBatched(add) {
        dispatch(addListIndexBatched(
            listIndexAddPayload(add)
        ));
        batcher.refresh();
    }
    function triggerIndexRemoveTimeBatched(remove) {
        dispatch(removeIndexBatched(
            indexRemovePayload(remove)
        ));
        batcher.refresh();
    }
    function triggerListIndexRemoveTimeBatched(remove) {
        dispatch(removeListIndexBatched(
            listIndexRemovePayload(remove)
        ));
        batcher.refresh();
    }
    function triggerIndexToggleTimeBatched(toggle) {
        dispatch(toggleIndexBatched(
            indexTogglePayload(toggle)
        ));
        batcher.refresh();
    }
    function triggerListIndexToggleTimeBatched(toggle) {
        dispatch(toggleListIndexBatched(
            listIndexTogglePayload(toggle)
        ));
        batcher.refresh();
    }
    function triggerIndexClearTimeBatched(clear) {
        dispatch(clearIndexBatched(
            indexClearPayload(clear)
        ));
        batcher.refresh();
    }
    function triggerListIndexClearTimeBatched(clear) {
        dispatch(clearListIndexBatched(
            listIndexClearPayload(clear)
        ));
        batcher.refresh();
    }
    // Batched actions
    function triggerCreateBatched(create) {
        batcher.abort();
        creator.handleCreateBatched(create);
    }
    function triggerDeleteBatched(deleted) {
        batcher.abort();
        deleter.handleDeleteBatched(deleted);
    }
    function triggerMoveBatched(move) {
        batcher.abort();
        dispatch(moveNodeBatched(
            movePayload(move)
        ));
    }
    function triggerShiftBatched(shift) {
        batcher.abort();
        dispatch(intershiftNodeBatched(
            shiftPayload(shift)
        ));
    }
    function triggerUpdateBatched(update) {
        batcher.abort();
        dispatch(updateNodeBatched(
            updatePayload(update)
        ));
    }
    function triggerRewriteBatched(rewrite) {
        batcher.abort();
        dispatch(rewriteNodeBatched(
            rewritePayload(rewrite)
        ));
    }
    function triggerMetaUpdateBatched(update) {
        batcher.abort();
        dispatch(updateMetaBatched(
            metaUpdatePayload(update)
        ));
    }
    function triggerIndexAddBatched(add) {
        batcher.abort();
        dispatch(addIndexBatched(
            indexAddPayload(add)
        ));
    }
    function triggerListIndexAddBatched(add) {
        batcher.abort();
        dispatch(addListIndexBatched(
            listIndexAddPayload(add)
        ));
    }
    function triggerIndexRemoveBatched(remove) {
        batcher.abort();
        dispatch(removeIndexBatched(
            indexRemovePayload(remove)
        ));
    }
    function triggerListIndexRemoveBatched(remove) {
        batcher.abort();
        dispatch(removeListIndexBatched(
            listIndexRemovePayload(remove)
        ));
    }
    function triggerIndexToggleBatched(toggle) {
        batcher.abort();
        dispatch(toggleIndexBatched(
            indexTogglePayload(toggle)
        ));
    }
    function triggerListIndexToggleBatched(toggle) {
        batcher.abort();
        dispatch(toggleListIndexBatched(
            listIndexTogglePayload(toggle)
        ));
    }
    function triggerIndexClearBatched(clear) {
        batcher.abort();
        dispatch(clearIndexBatched(
            indexClearPayload(clear)
        ));
    }
    function triggerListIndexClearBatched(clear) {
        batcher.abort();
        dispatch(clearListIndexBatched(
            listIndexClearPayload(clear)
        ));
    }
    // Unbatched actions
    function triggerCreateUnbatched(create) {
        batcher.abort();
        creator.handleCreateBatched(create);
        // Dispatch commit history
        // directly after batching
        // create actions to simulate
        // unbatched action.
        dispatch(commitHistory({}))
    }
    function triggerDeleteUnbatched(deleted) {
        batcher.abort();
        deleter.handleDeleteBatched(deleted)
        // Dispatch commit history
        // directly after batching
        // delete actions to simulate
        // unbatched action.
        dispatch(commitHistory({}))
    }
    function triggerMoveUnbatched(move) {
        batcher.abort();
        dispatch(moveNodeUnbatched(
            movePayload(move)
        ));
    }
    function triggerShiftUnbatched(shift) {
        batcher.abort();
        dispatch(intershiftNodeUnbatched(
            shiftPayload(shift)
        ));
    }
    function triggerUpdateUnbatched(update) {
        batcher.abort();
        dispatch(updateNodeUnbatched(
            updatePayload(update)
        ));
    }
    function triggerRewriteUnbatched(rewrite) {
        batcher.abort();
        dispatch(rewriteNodeUnbatched(
            rewritePayload(rewrite)
        ));
    }
    function triggerMetaUpdateUnbatched(update) {
        batcher.abort();
        dispatch(updateMetaUnbatched(
            metaUpdatePayload(update)
        ));
    }
    function triggerIndexAddUnbatched(add) {
        batcher.abort();
        dispatch(addIndexUnbatched(
            indexAddPayload(add)
        ));
    }
    function triggerListIndexAddUnbatched(add) {
        batcher.abort();
        dispatch(addListIndexUnbatched(
            listIndexAddPayload(add)
        ));
    }
    function triggerIndexRemoveUnbatched(remove) {
        batcher.abort();
        dispatch(removeIndexUnbatched(
            indexRemovePayload(remove)
        ));
    }
    function triggerListIndexRemoveUnbatched(remove) {
        batcher.abort();
        dispatch(removeListIndexUnbatched(
            listIndexRemovePayload(remove)
        ));
    }
    function triggerIndexToggleUnbatched(toggle) {
        batcher.abort();
        dispatch(toggleIndexUnbatched(
            indexTogglePayload(toggle)
        ));
    }
    function triggerListIndexToggleUnbatched(toggle) {
        batcher.abort();
        dispatch(toggleListIndexUnbatched(
            listIndexTogglePayload(toggle)
        ));
    }
    function triggerIndexClearUnbatched(clear) {
        batcher.abort();
        dispatch(clearIndexUnbatched(
            indexClearPayload(clear)
        ));
    }
    function triggerListIndexClearUnbatched(clear) {
        batcher.abort();
        dispatch(clearListIndexUnbatched(
            listIndexClearPayload(clear)
        ));
    }
    // Unrecorded actions
    function triggerCreateUnrecorded(create) {
        creator.handleCreateUnrecorded(create)
    }
    function triggerDeleteUnrecorded(deleted) {
        deleter.handleDeleteUnrecorded(deleted)
    }
    function triggerMoveUnrecorded(move) {
        dispatch(moveNodeUnrecorded(
            movePayload(move)
        ));
    }
    function triggerShiftUnrecorded(shift) {
        dispatch(intershiftNodeUnrecorded(
            shiftPayload(shift)
        ));
    }
    function triggerUpdateUnrecorded(update) {
        dispatch(updateNodeUnrecorded(
            updatePayload(update)
        ));
    }
    function triggerRewriteUnrecorded(rewrite) {
        dispatch(rewriteNodeUnrecorded(
            rewritePayload(rewrite)
        ));
    }
    function triggerMetaUpdateUnrecorded(update) {
        dispatch(updateMetaUnrecorded(
            metaUpdatePayload(update)
        ));
    }
    function triggerIndexAddUnrecorded(add) {
        dispatch(addIndexUnrecorded(
            indexAddPayload(add)
        ));
    }
    function triggerListIndexAddUnrecorded(add) {
        dispatch(addListIndexUnrecorded(
            listIndexAddPayload(add)
        ));
    }
    function triggerIndexRemoveUnrecorded(remove) {
        dispatch(removeIndexUnrecorded(
            indexRemovePayload(remove)
        ));
    }
    function triggerListIndexRemoveUnrecorded(remove) {
        dispatch(removeListIndexUnrecorded(
            listIndexRemovePayload(remove)
        ));
    }
    function triggerIndexToggleUnrecorded(toggle) {
        dispatch(toggleIndexUnrecorded(
            indexTogglePayload(toggle)
        ));
    }
    function triggerListIndexToggleUnrecorded(toggle) {
        dispatch(toggleListIndexUnrecorded(
            listIndexTogglePayload(toggle)
        ));
    }
    function triggerIndexClearUnrecorded(clear) {
        dispatch(clearIndexUnrecorded(
            indexClearPayload(clear)
        ));
    }
    function triggerListIndexClearUnrecorded(clear) {
        dispatch(clearListIndexUnrecorded(
            listIndexClearPayload(clear)
        ));
    }
    // History actions
    function triggerCommit() {
        batcher.abort();
        dispatch(commitHistory({}));
    }
    const timeBatched = {
        triggerCreate: triggerCreateTimeBatched,
        triggerDelete: triggerDeleteTimeBatched,
        triggerMove: triggerMoveTimeBatched,
        triggerShift: triggerShiftTimeBatched,
        triggerUpdate: triggerUpdateTimeBatched,
        triggerRewrite: triggerRewriteTimeBatched,
        triggerMetaUpdate: triggerMetaUpdateTimeBatched,
        triggerIndexAdd: triggerIndexAddTimeBatched,
        triggerIndexRemove: triggerIndexRemoveTimeBatched,
        triggerIndexToggle: triggerIndexToggleTimeBatched,
        triggerIndexClear: triggerIndexClearTimeBatched,
        triggerListIndexAdd: triggerListIndexAddTimeBatched,
        triggerListIndexRemove: triggerListIndexRemoveTimeBatched,
        triggerListIndexToggle: triggerListIndexToggleTimeBatched,
        triggerListIndexClear: triggerListIndexClearTimeBatched,
    }
    const batched = {
        triggerCreate: triggerCreateBatched,
        triggerDelete: triggerDeleteBatched,
        triggerMove: triggerMoveBatched,
        triggerShift: triggerShiftBatched,
        triggerUpdate: triggerUpdateBatched,
        triggerRewrite: triggerRewriteBatched,
        triggerMetaUpdate: triggerMetaUpdateBatched,
        triggerIndexAdd: triggerIndexAddBatched,
        triggerIndexRemove: triggerIndexRemoveBatched,
        triggerIndexToggle: triggerIndexToggleBatched,
        triggerIndexClear: triggerIndexClearBatched,
        triggerListIndexAdd: triggerListIndexAddBatched,
        triggerListIndexRemove: triggerListIndexRemoveBatched,
        triggerListIndexToggle: triggerListIndexToggleBatched,
        triggerListIndexClear: triggerListIndexClearBatched,
    }
    const unbatched = {
        triggerCreate: triggerCreateUnbatched,
        triggerDelete: triggerDeleteUnbatched,
        triggerMove: triggerMoveUnbatched,
        triggerShift: triggerShiftUnbatched,
        triggerUpdate: triggerUpdateUnbatched,
        triggerRewrite: triggerRewriteUnbatched,
        triggerMetaUpdate: triggerMetaUpdateUnbatched,
        triggerIndexAdd: triggerIndexAddUnbatched,
        triggerIndexRemove: triggerIndexRemoveUnbatched,
        triggerIndexToggle: triggerIndexToggleUnbatched,
        triggerIndexClear: triggerIndexClearUnbatched,
        triggerListIndexAdd: triggerListIndexAddUnbatched,
        triggerListIndexRemove: triggerListIndexRemoveUnbatched,
        triggerListIndexToggle: triggerListIndexToggleUnbatched,
        triggerListIndexClear: triggerListIndexClearUnbatched,
    }
    const unrecorded = {
        triggerCreate: triggerCreateUnrecorded,
        triggerDelete: triggerDeleteUnrecorded,
        triggerMove: triggerMoveUnrecorded,
        triggerShift: triggerShiftUnrecorded,
        triggerUpdate: triggerUpdateUnrecorded,
        triggerRewrite: triggerRewriteUnrecorded,
        triggerMetaUpdate: triggerMetaUpdateUnrecorded,
        triggerIndexAdd: triggerIndexAddUnrecorded,
        triggerIndexRemove: triggerIndexRemoveUnrecorded,
        triggerIndexToggle: triggerIndexToggleUnrecorded,
        triggerIndexClear: triggerIndexClearUnrecorded,
        triggerListIndexAdd: triggerListIndexAddUnrecorded,
        triggerListIndexRemove: triggerListIndexRemoveUnrecorded,
        triggerListIndexToggle: triggerListIndexToggleUnrecorded,
        triggerListIndexClear: triggerListIndexClearUnrecorded,
    }
    const history = {
        triggerCommit: triggerCommit
    }
    const triggers = {
        timeBatched: timeBatched,
        batched: batched,
        unbatched: unbatched,
        unrecorded: unrecorded,
        history: history,
    }
    const bag = {
        ...triggers,
    }
    return bag; 
}

export default useActions;