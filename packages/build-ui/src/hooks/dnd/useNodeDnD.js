import {useState} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {getTransfer} from "../../selectors";
import {getTransferData, getTransferMeta} from "../../selectors/transfer";
import useCollector from "../collectors/useCollector";
import useMultiCollector from '../collectors/useMultiCollector';
import useActions from "../useActions";
import useDnD from "./useDnD";

const useNodeDnD = ({
    initialTransferType,
    initialOnDrop = () => {},
    initialOnDropDone = () => {},
    id,
}) => {
    // Must initialize state as callback
    // since useState runs argument
    // automatically if it is a callable
    const [onDrop, setOnDrop] = useState(
        () => initialOnDrop
    );
    const [onDropDone, setOnDropDone] = useState(
        () => initialOnDropDone
    );
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collect = useCollector({
        selector: nodeSelector,
    });
    const node = collect.node;
    const multiSelector = selectors => (
        selectors.selectParentsById(id)
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
    function dragDropBag() {
        const data = getTransferData(transfer);
        // In case drop is not
        // caused by an internal
        // action, such as dropping
        // a file or image. Or when
        // there is no active current
        // drag and drop action.
        if (!data) return null;
        const meta = getTransferMeta(transfer);
        const create = meta.create;
        if (create) return dragDropBagCreate();
        if (!create) return dragDropBagMove();
    }
    function dragDropBagCreate() {
        const data = getTransferData(transfer);
        const meta = getTransferMeta(transfer);
        const rootId = data.root;
        const root = data.byIds[rootId];
        const dragDropBag = {
            transfer: root,
            meta: meta,
        }
        return dragDropBag;
    }
    function dragDropBagMove() {
        const moved = getTransferData(transfer);
        const meta = getTransferMeta(transfer);
        const dragDropBag = {
            transfer: moved,
            meta: meta,
        }
        return dragDropBag;
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
            ...dragDropBag(),
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
            // For mouse events
            if (event.nativeEvent) event.stopPropagation();
            // For touch events
            else event.stopImmediatePropagation();
        }
        if (drop.cancelled) {
            return;
        }
        actions.triggerCreate({
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
            ...dragDropBag(),
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
            // For mouse events
            if (event.nativeEvent) event.stopPropagation();
            // For touch events
            else event.stopImmediatePropagation();
        }
        if (drop.cancelled) {
            return;
        }
        actions.triggerMove({
            id: moved.id,
            targetId: id,
            position: position,
        });
        onDropDone(dropBag);
    }
    function handleChildYDrop(event, position) {
        const {top} = getEventPosition(event);
        const offset = top ? 0 : 1;
        const dropPosition = position + offset;
        handleDrop(event, dropPosition);
    }
    function handleChildXDrop(event, position) {
        const {left} = getEventPosition(event);
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
    function getEventPosition(event) {
        const eventX = event.clientX;
        const eventY = event.clientY;
        const target = event.currentTarget;
        const {
            top, height,
            left, width,
        } = target.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        return {
            top: centerY > eventY,
            bottom: centerY <= eventY,
            left: centerX > eventX,
            right: centerX <= eventX,
        }
    }
    const dndBag = {
        transferType: transferType,
        onDrop: onDrop,
        onDropDone: onDropDone,
        setTransferType: setTransferType,
        setOnDrop: setOnDrop,
        setOnDropDone: setOnDropDone,
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
    const utils = {
        dragDropBag,
        getEventPosition,
    }
    const bag = {
        ...dndBag,
        ...handlers,
        ...triggers,
        ...utils,
    }
    return bag;
}

export default useNodeDnD;