import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getTransfer} from "../../selectors";
import {getTransferData, getTransferMeta} from "../../selectors/transfer";
import useCollector from "../collectors/useCollector";
import useMultiCollector from '../collectors/useMultiCollector';
import useActions from "../useActions";
import useDnD from "./useDnD";
import useDnDHelpers from "./useDnDHelpers";

const useNodeDnD = ({
    id,
    initialTransferType,
}) => {

    // Warn client if a falsy
    // id was received, as this
    // will cause unpredictable 
    // behavior.

    useEffect(() => {
        if (id) return;
        console.warn(`
            Did not received valid 
            id in DnD hook. 
            Please provide a valid
            id to have predictable 
            behavior.
        `);
    }, [id]);

    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collect = useCollector({
        selector: nodeSelector,
    });
    const node = collect.node;
    const multiSelector = selectors => (
        selectors.selectParents(id)
    );
    const multicollect = useMultiCollector({
        selector: multiSelector
    });
    const nodeParents = multicollect.nodes;
    const transferSelector = store => (
        getTransfer(store)
    );
    const transfer = useSelector(
        transferSelector,
    );
    const dnd = useDnD({
        initialTransferType: 
        initialTransferType
    });
    const transferType = (
        dnd.transferType
    );
    const helpers = useDnDHelpers({
        transferType: transferType,
    });
    const actions = useActions();
    function triggerDragStart(drag) {
        dnd.triggerDragStartMove({
            data: node,
            meta: drag.meta,
            // Transfer type
            // set by DnD hook
            // composition
        });
    }
    function triggerDragEnd() {
        dnd.triggerDragEnd();
    }
    function handleDragStart(event) {
        triggerDragStart({});
        event.stopPropagation();
    }
    function handleDragEnd() {
        triggerDragEnd();
    }
    function handleDrop(event, position = null) {
        const data = getTransferData(transfer);
        // In case drop is not
        // caused by an internal
        // action, such as dropping
        // a file or image.
        if (!data) return;
        const meta = getTransferMeta(transfer);
        const create = meta.create;
        if (create) handleDropCreate(event, position);
        if (!create) handleDropMove(event, position);
    }
    function handleDropCreate(event, position) {
        const data = getTransferData(transfer);
        actions.timeBatched.triggerCreate({
            targetId: id,
            node: data,
            position: position,
        });
        event.stopPropagation()
    }
    function handleDropMove(event, position) {
        const data = getTransferData(transfer);
        actions.timeBatched.triggerMove({
            id: data.id,
            targetId: id,
            position: position,
        });
        event.stopPropagation()
    }
    function handleChildYDrop(event, position) {
        const {top} = helpers.getDnDEventPosition(event);
        const offset = top ? 0 : 1;
        const dropPosition = position + offset;
        handleDrop(event, dropPosition);
    }
    function handleChildXDrop(event, position) {
        const {left} = helpers.getDnDEventPosition(event);
        const offset = left ? 0 : 1;
        const dropPosition = position + offset;
        handleDrop(event, dropPosition);
    }
    function toDnDHandler(handler) {
        // Must wrap handlers with
        // this function to avoid
        // handling unwanted events,
        // such as "recursive" dnd
        // events, like dropping
        // a component into itself.
        const bag = helpers.getDragAndDrop();
        if (!bag) {
            return handler;
        }
        const transferID = bag.transfer.id;
        const isRecursive = (
            nodeParents[transferID] ||
            transferID === id
        );
        if (!isRecursive) {
            return handler;
        }
        // Ignore handler if
        // transfer node is 
        // invalid.
        return undefined;
    }
    const dndBag = {
        transferType: dnd.transferType,
        setTransferType: dnd.setTransferType,
    }
    const handlers = {
        handleDrop: toDnDHandler(handleDrop),
        handleChildXDrop: toDnDHandler(handleChildXDrop),
        handleChildYDrop: toDnDHandler(handleChildYDrop),
        handleDragStart,
        handleDragEnd,
    }
    const triggers = {
        triggerDragStart,
        triggerDragEnd,
    }
    const wrappers = {
        toDnDHandler,
    }
    const bag = {
        ...dndBag,
        ...handlers,
        ...triggers,
        ...helpers,
        ...wrappers,
    }
    return bag;
}

export default useNodeDnD;