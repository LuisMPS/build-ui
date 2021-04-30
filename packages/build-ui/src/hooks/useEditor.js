import useActions from "./useActions";
import useNodeDnD from "./dnd/useNodeDnD";
import useCollector from "./collectors/useCollector";
import {setIn} from "../utils/object";

const useEditor = ({
    id,
    initialOnDrop,
    initialOnDropDone,
}) => {
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: nodeSelector,
    });
    const props = (
        collected.node && 
        collected.node.props
    );
    const dnd = useNodeDnD({
        initialTransferType: 'builder',
        initialOnDrop: initialOnDrop,
        initialOnDropDone: initialOnDropDone,
        id: id,
    });
    const actions = useActions();
    function triggerCreate(create) {
        actions.triggerCreate({
            ...create,
            targetId: id,
        });
    }
    function triggerDelete() {
        actions.triggerDelete({
            id: id
        });
    }
    function triggerMove(move) {
        actions.triggerMove({
            ...move,
            id: id,
        });
    }
    function triggerShift(shift) {
        actions.triggerShift({
            ...shift,
            id: id,
        });
    }
    function triggerUpdate(update) {
        actions.triggerUpdate({
            ...update,
            id: id,
        });
    }
    function triggerRewrite(rewrite) {
        actions.triggerRewrite({
            ...rewrite,
            id: id,
        });
    }
    function triggerMetaUpdate(update) {
        actions.triggerMetaUpdate({
            ...update,
            id: id,
        });
    }
    function triggerIndexAdd(add) {
        actions.triggerIndexAdd({
            ...add,
            id: id,
        });
    }
    function triggerIndexRemove(remove) {
        actions.triggerIndexRemove({
            ...remove,
            id: id,
        });
    }
    function triggerIndexToggle(toggle) {
        actions.triggerIndexToggle({
            ...toggle,
            id: id,
        });
    }
    function triggerListIndexAdd(add) {
        actions.triggerListIndexAdd({
            ...add,
            id: id,
        });
    }
    function triggerListIndexRemove(remove) {
        actions.triggerListIndexRemove({
            ...remove,
            id: id,
        });
    }
    function triggerListIndexToggle(toggle) {
        actions.triggerListIndexToggle({
            ...toggle,
            id: id,
        });
    }
    function handleUpdate(event, parser) {
        const name = event.target.name;
        const value = parser 
        ? parser(event.target.value)
        : event.target.value;
        const props = setIn({}, name, value);
        triggerUpdate({
            props: props,
        });
    }
    function handlePanel(event) {
        event.stopPropagation();
        // Trigger index change
        triggerIndexAdd({
            name: 'panel',
        });
    }
    const editorBag = {
        props: props,
    }
    const {
        transferType,
        setTransferType,
        ...dndBag
    } = dnd;
    const handlers = {
        handleUpdate,
        handlePanel,
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
        triggerListIndexAdd,
        triggerListIndexRemove,
        triggerListIndexToggle,
    }
    const bag = {
        ...editorBag,
        ...dndBag,
        ...handlers,
        ...triggers,
    }
    return bag;
}

export default useEditor;