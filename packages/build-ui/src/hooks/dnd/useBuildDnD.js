import useDnD from "./useDnD";

const useBuildDnD = ({
    transferType,
}) => {
    const dnd = useDnD({
        transferType: 
        transferType
    });
    function triggerDragStart(drag) {
        dnd.triggerUpdate(drag);
    }
    function triggerDragStartMove(drag) {
        const meta = {
            ...(drag.meta || {}),
            create: false,
        };
        triggerDragStart({
            ...drag,
            meta: meta,
            type: transferType,
        });
    }
    function triggerDragStartCreate(drag) {
        const meta = {
            ...(drag.meta || {}),
            create: true,
        }
        triggerDragStart({
            ...drag,
            meta: meta,
            type: transferType,
        });
    }
    function triggerDragEnd() {
        dnd.triggerEnd();
    }
    const {
        triggerEnd,
        triggerUpdate,
        ...dndBag
    } = dnd;
    const triggers = {
        triggerDragStartCreate,
        triggerDragStartMove,
        triggerDragEnd,
    };
    const bag = {
        ...triggers,
        ...dndBag,
    }
    return bag;
}

export default useBuildDnD;