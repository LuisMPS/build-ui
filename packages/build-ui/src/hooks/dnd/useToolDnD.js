import useBuildDnD from "./useBuildDnD";
import {plainBranch} from "../../utils/tree";

const useToolDnD = ({
    transferType,
}) => {
    const dnd = useBuildDnD({
        transferType:
        transferType,
    });
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
    const handlers = {
        handleDragEnd,
    }
    const triggers = {
        triggerDragStart,
        triggerDragEnd,
    }
    const bag = {
        ...handlers,
        ...triggers
    }
    return bag;
}

export default useToolDnD;