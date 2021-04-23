import {useState} from "react";
import {useDispatch} from "react-redux";
import {startTransfer, endTransfer} from "../../slices/transfer";

const useDnD = ({
    initialTransferType,
}) => {
    const [transferType, setTransferType] = (
        useState(initialTransferType)
    );
    const dispatch = useDispatch();
    function triggerDragStart(drag) {
        dispatch(startTransfer({
            data: drag.data,
            meta: drag.meta,
            type: transferType,
        }))
    }
    function triggerDragStartMove(drag) {
        const meta = {
            create: false,
            ...drag.meta || {},
        };
        triggerDragStart({
            data: drag.data,
            meta: meta,
            type: transferType,
        });
    }
    function triggerDragStartCreate(drag) {
        const meta = {
            create: true,
            ...drag.meta || {},
        }
        triggerDragStart({
            data: drag.data,
            meta: meta,
            type: transferType,
        });
    }
    function triggerDragEnd() {
        dispatch(endTransfer({}))
    }
    const dndBag = {
        transferType: transferType,
        setTransferType: setTransferType,
    }
    const triggers = {
        triggerDragStartCreate,
        triggerDragStartMove,
        triggerDragEnd,
    };
    const bag = {
        ...dndBag,
        ...triggers,
    }
    return bag;
}

export default useDnD;