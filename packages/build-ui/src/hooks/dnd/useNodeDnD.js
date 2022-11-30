import {useEffect} from "react";
import useBuildDnD from "./useBuildDnD";
import useCollector from "../collectors/useCollector";
import useMultiCollector from '../collectors/useMultiCollector';
import useActions from "../useActions";

const useNodeDnD = ({
    id,
    transferType,
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
    const dnd = useBuildDnD({
        transferType: 
        transferType,
    });
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
    const actions = useActions();
    function triggerDragStart(drag) {
        dnd.triggerDragStartMove({
            ...drag,
            data: node,
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
        if (!dnd.isTransferingType) return;
        const create = dnd.transfer.meta.create;
        if (create) handleDropCreate(event, position);
        if (!create) handleDropMove(event, position);
    }
    function handleDropCreate(event, position) {
        const data = dnd.transfer.data;
        actions.timeBatched.triggerCreate({
            targetId: id,
            node: data,
            position: position,
        });
        event.stopPropagation()
    }
    function handleDropMove(event, position) {
        const data = dnd.transfer.data;
        actions.timeBatched.triggerMove({
            targetId: id,
            id: data.id,
            position: position,
        });
        event.stopPropagation()
    }
    function toDnDHandler(handler) {
        // Must wrap handlers with
        // this function to avoid
        // handling unwanted events,
        // such as "recursive" dnd
        // events, like dropping
        // a component into itself.
        
        if (!dnd.transfer.data) {
            return handler;
        }
        const transferID = (
            dnd.transfer.meta.create 
            ? dnd.transfer.data.root
            : dnd.transfer.data.id
        );
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
    const handlers = {
        handleDrop: toDnDHandler(handleDrop),
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
    const {
        triggerDragEnd: _triggerDragEnd,
        triggerDragStartCreate,
        triggerDragStartMove,
        ...dndBag
    } = dnd;
    const bag = {
        ...handlers,
        ...triggers,
        ...wrappers,
        ...dndBag,
    }
    return bag;
}

export default useNodeDnD;