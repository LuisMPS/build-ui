import useNodeDnD from "./dnd/useNodeDnD";
import useCollector from "./collectors/useCollector";
import useActions from "./useActions";
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
    function handleUpdate(event, parser) {
        const name = event.target.name;
        const value = parser 
        ? parser(event.target.value)
        : event.target.value;
        const props = setIn({}, name, value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: props,
        });
    }
    function handlePanel(event) {
        event.stopPropagation();
        // Trigger index change
        actions.timeBatched.triggerIndexAdd({
            id: id,
            name: 'panel',
        });
    }
    const editorBag = {
        props: props,
    }
    const {
        isTransfering,
        isTransferingType,
        transferType,
        setTransferType,
        ...dndBag
    } = dnd;
    const handlers = {
        handleUpdate,
        handlePanel,
    }
    const flags = {
        isTransfering: isTransferingType
    }
    const bag = {
        ...editorBag,
        ...dndBag,
        ...handlers,
        ...flags,
    }
    return bag;
}

export default useEditor;