import {shallowEqual, useSelector} from "react-redux";
import {getTransfer} from "../../selectors";
import {getTransferData, getTransferMeta} from "../../selectors/transfer";
import useCollector from "../collectors/useCollector";
import useMultiCollector from '../collectors/useMultiCollector';
import useActions from "../useActions";
import useDnD from "./useDnD";
import useDnDHelpers from "./useDnDHelpers";

const useNodeDnD = ({
    initialTransferType,
    onDrop = () => {},
    onDropDone = () => {},
    id,
}) => {
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
        shallowEqual,
    );
    const dnd = useDnD({
        initialTransferType: 
        initialTransferType
    });
    const transferType = (
        dnd.transferType
    );
    const setTransferType = (
        dnd.setTransferType
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
    function dropUtils(drop) {
        // Below functions 
        // will be passed to dropper 
        // function when called on 
        // handleDrop.
        const cancel = () => {
            drop.cancelled = true;
            drop.explicitCancel = true;
        };
        return {
            cancel: cancel,
        }
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
        const drop = {
            cancelled: false,
            explicitCancel: false,
        };
        const dropBag = {
            event: event,
            ...helpers.getDragAndDrop(),
        }
        const onDropBag = {
            cancelled: drop.cancelled,
            ...dropUtils(drop),
            ...dropBag,
        }
        onDrop(onDropBag);
        // Stop the rest of event 
        // handlers only if drop was 
        // succesful or explicitly. 
        // cancelled. (To delegate
        // drop handling instead of 
        // short-circuiting event, 
        // such as when moving node
        // a little amount away from
        // current position).
        const stopEvent = (
            !drop.cancelled || 
            drop.explicitCancel
        );
        if (stopEvent) {
            event.stopPropagation();
        }
        if (drop.cancelled) {
            return;
        }
        actions.timeBatched.triggerCreate({
            targetId: id,
            node: data,
            position: position,
        });
        onDropDone(dropBag);
    }
    function handleDropMove(event, position) {
        const moved = getTransferData(transfer);
        const isRecursive = (
            nodeParents[moved.id] || 
            node.id === moved.id
        );
        const drop = {
            cancelled: isRecursive,
            explicitCancel: false,
        };
        const dropBag = {
            event: event,
            ...helpers.getDragAndDrop(),
        }
        const onDropBag = {
            cancelled: drop.cancelled,
            ...dropUtils(drop),
            ...dropBag,
        }
        // Short-circuit if drop is 
        // recursive before the rest
        // of event handling logic.
        if (drop.cancelled) {
            return;
        }
        onDrop(onDropBag);
        // Stop event bubbling
        // as explained above.
        const stopEvent = (
            !drop.cancelled || 
            drop.explicitCancel
        );
        if (stopEvent) {
            event.stopPropagation();
        }
        if (drop.cancelled) {
            return;
        }
        actions.timeBatched.triggerMove({
            id: moved.id,
            targetId: id,
            position: position,
        });
        onDropDone(dropBag);
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
    function handleDragStart(event) {
        event.stopPropagation();
        triggerDragStart({});
    }
    function handleDragEnd() {
        triggerDragEnd();
    }
    function onDragEnter(handleDragEnter) {
        const data = getTransferData(transfer);
        const meta = getTransferMeta(transfer);
        if (!data || meta.create) return handleDragEnter;
        const bag = helpers.getDragAndDrop();
        const moved = bag.transfer;
        const isRecursive = (
            nodeParents[moved.id] || 
            node.id === moved.id
        );
        if (!isRecursive) return handleDragEnter;
        return null;
    }
    const dndBag = {
        transferType: transferType,
        onDrop: onDrop,
        onDropDone: onDropDone,
    }
    const handlers = {
        handleDrop,
        handleChildXDrop,
        handleChildYDrop,
        handleDragStart,
        handleDragEnd,
    }
    const triggers = {
        triggerDragStart,
        triggerDragEnd,
    }
    const wrappers = {
        onDragEnter,
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