import {useEffect} from "react";
import useNodeDnD from "./dnd/useNodeDnD";
import useCollector from "./collectors/useCollector";
import useActions from "./useActions";
import {getIn, setIn} from "../utils/object";
import {isNumber, parseNumber} from "../utils/number";
import {isFunction} from "../history/utils/function";

const useEditor = ({
    id,
}) => {

    // Warn client if a falsy
    // id was received, as this
    // will cause unpredictable 
    // behavior.

    useEffect(() => {
        if (id) return;
        console.warn(`
            Did not received valid 
            id in editor hook. 
            Please provide a valid
            id to have predictable 
            behavior.
        `);
    }, [id]);

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
    const meta = (
        collected.meta
    );
    const dnd = useNodeDnD({
        initialTransferType: 'builder',
        id: id,
    });
    const actions = useActions();
    function getEventValue(event) {
        const target = event.target;
        const type = target.type;
        const value = target.value;
        const checked = target.checked;
        switch (type) {
            case 'checkbox': {
                return checked;
            }
            case 'number':
            case 'range': {
                const number = parseNumber(value); 
                return isNumber(number) ? number : value;
            }
            default: {
                return value;
            }
        }
    }
    function handleUpdate(event, parser) {
        const name = event.target.name;
        const value = getEventValue(event);
        const previousValue = getIn(props, name);
        const parsedValue = (
            parser && isFunction(parser) 
            ? parser(value, previousValue)
            : value
        );
        const props = setIn({}, name, parsedValue);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: props,
        });
    }
    function handleMetaUpdate(event, parser) {
        const name = event.target.name;
        const value = getEventValue(event);
        const previousValue = getIn(meta, name);
        const parsedValue = (
            parser && isFunction(parser)
            ? parser(value, previousValue)
            : value
        );
        const props = setIn({}, name, parsedValue);
        actions.timeBatched.triggerMetaUpdate({
            id: id,
            meta: props,
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
        meta: meta,
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
        handleMetaUpdate,
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