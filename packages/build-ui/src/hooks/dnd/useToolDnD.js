import useDnD from "./useDnD";
import {plainBranch} from "../../utils/tree";

const useToolDnD = ({
    initialTransferType,
}) => {
    const dnd = useDnD({
        initialTransferType:
        initialTransferType,
    });
    const transferType = (
        dnd.transferType
    );
    const setTransferType = (
        dnd.setTransferType
    );
    function triggerDragStart(drag) {
        const data = plainBranch(drag.data);
        dnd.triggerDragStartCreate({
            data: data,
            meta: drag.meta,
        });
    }
    function triggerDragEnd() {
        dnd.triggerDragEnd();
    }
    function handleDragEnd() {
        triggerDragEnd();
    }
    const dndBag = {
        transferType: transferType,
        setTransferType: setTransferType,
    }
    const handlers = {
        handleDragEnd,
    }
    const triggers = {
        triggerDragStart,
        triggerDragEnd,
    }
    const bag = {
        ...dndBag,
        ...handlers,
        ...triggers
    }
    return bag;
}

export default useToolDnD;