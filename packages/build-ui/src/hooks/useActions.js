import {useDispatch} from "react-redux";
import {moveNode, intershiftNode, updateNode, rewriteNode, updateMeta, removeIndex, removeListIndex, addIndex, addListIndex, toggleIndex, toggleListIndex} from "../slices/tree";
import {useCreator, useDeleter} from "./useComposed";
import {setIn} from "../utils/object";
import useSketchContext from "./useSketchContext";

const useActions = () => {
    const dispatch = useDispatch();
    const context = useSketchContext();
    const batcher = context.batcher;
    const creator = useCreator();
    const deleter = useDeleter();
    function triggerCreate(create) {
        creator.handleCreate({
            targetId: create.targetId,
            node: create.node,
            position: create.position,
        });
        batcher.refresh();
    }
    function triggerDelete(deleted) {
        deleter.handleDelete({
            id: deleted.id,
        });
        batcher.refresh();
    }
    function triggerMove(move) {
        dispatch(moveNode({
            targetId: move.targetId,
            id: move.id,
            position: move.position,
        }));
        batcher.refresh();
    }
    function triggerShift(shift) {
        dispatch(intershiftNode({
            id: shift.id,
            absolute: shift.absolute,
            relative: shift.relative,
        }));
        batcher.refresh();
    }
    function triggerUpdate(update) {
        const props = update.props;
        const _props = Object.keys(props)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            props[prop]
        ), {});
        dispatch(updateNode({
            id: update.id,
            props: _props,
        }));
        batcher.refresh();
    }
    function triggerRewrite(rewrite) {
        const props = rewrite.props;
        const _props = Object.keys(props)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            props[prop]
        ), {});
        dispatch(rewriteNode({
            id: rewrite.id,
            props: _props,
        }));
        batcher.refresh();
    }
    function triggerMetaUpdate(update) {
        const props = update.props;
        const _props = Object.keys(props)
        .reduce((update, prop) => setIn(
            update, 
            prop, 
            props[prop]
        ), {});
        dispatch(updateMeta({
            id: update.id,
            props: _props,
        }));
        batcher.refresh();
    }
    function triggerIndexAdd(add) {
        dispatch(addIndex({
            id: add.id,
            name: add.name,
        }));
        batcher.refresh();
    }
    function triggerListIndexAdd(add) {
        dispatch(addListIndex({
            id: add.id,
            name: add.name,
        }));
        batcher.refresh();
    }
    function triggerIndexRemove(remove) {
        dispatch(removeIndex({
            id: remove.id,
            name: remove.name
        }));
        batcher.refresh();
    }
    function triggerListIndexRemove(remove) {
        dispatch(removeListIndex({
            id: remove.id,
            name: remove.name
        }));
        batcher.refresh();
    }
    function triggerIndexToggle(toggle) {
        dispatch(toggleIndex({
            id: toggle.id,
            name: toggle.name
        }));
        batcher.refresh();
    }
    function triggerListIndexToggle(toggle) {
        dispatch(toggleListIndex({
            id: toggle.id,
            name: toggle.name
        }));
        batcher.refresh();
    }
    function triggerIndexClear(clear) {
        dispatch(removeIndex({
            name: clear.name
        }));
        batcher.refresh();
    }
    function triggerListIndexClear(clear) {
        dispatch(removeListIndex({
            name: clear.name
        }));
        batcher.refresh();
    }
    const triggers = {
        triggerCreate,
        triggerDelete,
        triggerMove,
        triggerShift,
        triggerUpdate,
        triggerRewrite,
        triggerMetaUpdate,
        triggerIndexAdd,
        triggerIndexRemove,
        triggerIndexToggle,
        triggerIndexClear,
        triggerListIndexAdd,
        triggerListIndexRemove,
        triggerListIndexToggle,
        triggerListIndexClear,
    }
    const bag = {
        ...triggers,
    }
    return bag; 
}

export default useActions;